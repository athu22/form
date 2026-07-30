import React, { useRef, useEffect, useState } from 'react';
import html2pdf from 'html2pdf.js';
import ActionButtons from './components/ActionButtons';
import Page1_Checklist from './components/Page1_Checklist';
import Page2_Application from './components/Page2_Application';
import Page3_NOC from './components/Page3_NOC';
import Page4_Inspection_Seniority from './components/Page4_Inspection_Seniority';
import Page5_Maintenance_OfficeOrder from './components/Page5_Maintenance_OfficeOrder';
import Page6_Training_Warranty from './components/Page6_Training_Warranty';
import Page7_Notice from './components/Page7_Notice';

function App() {

  const formRef = useRef(null);

  const saveAllInputs = () => {
    const savedMap = JSON.parse(localStorage.getItem('form_field_autocomplete') || '{}');
    let updated = false;
    document.querySelectorAll('#pdf-content input').forEach((input) => {
      if (input.type === 'checkbox' || input.type === 'radio' || input.type === 'button') return;
      const fieldId = input.id;
      if (!fieldId) return;
      const val = input.value.trim();
      if (val) {
        const currentList = savedMap[fieldId] || [];
        if (!currentList.includes(val)) {
          savedMap[fieldId] = [...currentList, val].slice(-30);
          updated = true;
        }
      }
    });
    if (updated) {
      localStorage.setItem('form_field_autocomplete', JSON.stringify(savedMap));
      window.dispatchEvent(new Event('update_datalists'));
    }
  };

  useEffect(() => {
    // 1. Create the floating dropdown UI container
    let dropdown = document.getElementById('custom-floating-dropdown');
    if (!dropdown) {
      dropdown = document.createElement('ul');
      dropdown.id = 'custom-floating-dropdown';
      Object.assign(dropdown.style, {
        position: 'absolute',
        display: 'none',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
        maxHeight: '200px',
        overflowY: 'auto',
        zIndex: 9999,
        width: '200px',
        borderRadius: '4px'
      });
      document.body.appendChild(dropdown);
    }

    // 2. Assign unique IDs and remove native autocomplete/datalist
    const assignIds = () => {
      document.querySelectorAll('#pdf-content input').forEach((input, index) => {
        if (input.type === 'checkbox' || input.type === 'radio' || input.type === 'button') return;
        
        if (!input.id) input.id = `auto-field-${index}`;
        input.setAttribute('autocomplete', 'off'); // Disable native autocomplete
        input.removeAttribute('list'); // Remove native datalist
      });
      
      // Cleanup the old datalists container if it exists
      const oldContainer = document.getElementById('datalists-container');
      if (oldContainer) oldContainer.remove();
    };
    
    setTimeout(assignIds, 100);

    let activeInput = null;

    // 3. Logic to show the dropdown
    const showDropdown = (input) => {
      const fieldId = input.id;
      const savedMap = JSON.parse(localStorage.getItem('form_field_autocomplete') || '{}');
      let options = savedMap[fieldId] || [];
      
      const val = input.value.trim().toLowerCase();
      if (val) {
        options = options.filter(o => o.toLowerCase().includes(val) && o !== input.value.trim());
      }

      if (options.length > 0) {
        const rect = input.getBoundingClientRect();
        Object.assign(dropdown.style, {
          display: 'block',
          top: `${rect.bottom + window.scrollY}px`,
          left: `${rect.left + window.scrollX}px`,
          width: `${Math.max(rect.width, 150)}px`
        });
        
        dropdown.innerHTML = '';
        options.forEach(opt => {
          const li = document.createElement('li');
          li.textContent = opt;
          Object.assign(li.style, {
            padding: '12px 10px',
            cursor: 'pointer',
            borderBottom: '1px solid #eee',
            fontSize: '16px', // Mobile friendly font size
            color: '#000',
            backgroundColor: '#fff'
          });
          
          li.onmouseover = () => { li.style.backgroundColor = '#f0f0f0'; };
          li.onmouseout = () => { li.style.backgroundColor = '#fff'; };
          
          li.onmousedown = (e) => {
            e.preventDefault(); // Prevent input from losing focus immediately
            input.value = opt;
            dropdown.style.display = 'none';
          };
          dropdown.appendChild(li);
        });
        activeInput = input;
      } else {
        dropdown.style.display = 'none';
      }
    };

    const handleFocus = (e) => {
      if (e.target.tagName === 'INPUT' && e.target.closest('#pdf-content')) {
        if (e.target.type === 'checkbox' || e.target.type === 'radio') return;
        showDropdown(e.target);
      }
    };

    const handleInput = (e) => {
      if (e.target.tagName === 'INPUT' && activeInput === e.target) {
        showDropdown(e.target);
      }
    };

    const handleBlur = (e) => {
      if (e.target.tagName === 'INPUT' && e.target.closest('#pdf-content')) {
        dropdown.style.display = 'none';
        activeInput = null;
      }
    };

    // Prevent clicks inside the dropdown from closing it before mousedown processes
    const handleDocClick = (e) => {
      if (activeInput && e.target !== activeInput && !dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
        activeInput = null;
      }
    };

    document.addEventListener('focus', handleFocus, true);
    document.addEventListener('input', handleInput, true);
    document.addEventListener('blur', handleBlur, true);
    document.addEventListener('mousedown', handleDocClick);

    // If print updates localstorage, we don't need to do anything immediately
    // because the dropdown regenerates on focus anyway.
    
    return () => {
      document.removeEventListener('focus', handleFocus, true);
      document.removeEventListener('input', handleInput, true);
      document.removeEventListener('blur', handleBlur, true);
      document.removeEventListener('mousedown', handleDocClick);
      if (dropdown && dropdown.parentNode) {
        dropdown.parentNode.removeChild(dropdown);
      }
    };
  }, []);

  const handlePrint = () => {
    saveAllInputs();
    window.print();
  };

  const handleDownload = () => {
    saveAllInputs();
    const element = formRef.current;

    // Create a clone to fix inputs for html2pdf
    // Note: html2pdf/html2canvas can struggle with input values. 
    // Best practice for perfect A4 is actually printing to PDF via the browser,
    // but we will provide this download function as well.
    const opt = {
      margin: 0,
      filename: 'government_form.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear the entire form?")) {
      window.location.reload();
    }
  };

  const handleSave = () => {
    alert("Draft saved locally (Mock function).");
  };

  const handlePreview = () => {
    alert("To preview the form, please use the Print button to open the browser's PDF Print Preview.");
  };

  return (
    <div className="app-container bg-gray-100 min-h-screen">
      <ActionButtons
        onPrint={handlePrint}
        onDownload={handleDownload}
        onClear={handleClear}
        onSave={handleSave}
        onPreview={handlePreview}
      />

      <div id="pdf-content" ref={formRef}>
        <Page1_Checklist />
        <Page2_Application />
        <Page3_NOC />
        <Page4_Inspection_Seniority />
        <Page5_Maintenance_OfficeOrder />
        <Page6_Training_Warranty />
        <Page7_Notice />
      </div>
    </div>
  );
}

export default App;
