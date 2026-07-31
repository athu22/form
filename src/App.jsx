import React, { useRef, useEffect, useState } from 'react';
import { collection, addDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';
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
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // Listen to real-time updates from Firestore
    const unsubscribe = onSnapshot(collection(db, "applications"), (snapshot) => {
      const docs = [];
      snapshot.forEach((doc) => {
        docs.push({ id: doc.id, ...doc.data() });
      });
      // Sort by date descending
      docs.sort((a, b) => new Date(b.date) - new Date(a.date));
      setSubmissions(docs);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleGlobalInput = (e) => {
      if (e.target.tagName === 'INPUT') {
        const syncKey = e.target.getAttribute('data-sync');
        if (syncKey) {
          const val = e.target.value;
          document.querySelectorAll(`input[data-sync="${syncKey}"]`).forEach(input => {
            if (input !== e.target && input.value !== val) {
              input.value = val;
            }
          });
        }
      }
    };
    
    document.addEventListener('input', handleGlobalInput);
    return () => document.removeEventListener('input', handleGlobalInput);
  }, []);

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

    // Fix for html2canvas: Set actual HTML attributes for inputs so it captures the typed text
    element.querySelectorAll('input').forEach(input => {
      if (input.type === 'checkbox' || input.type === 'radio') {
        if (input.checked) input.setAttribute('checked', 'checked');
        else input.removeAttribute('checked');
      } else {
        input.setAttribute('value', input.value);
      }
    });

    // Add a class that forces the elements into a 210mm print layout
    element.classList.add('pdf-export-mode');

    const opt = {
      margin: 0,
      filename: 'government_form.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2, useCORS: true, windowWidth: 1024 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: 'css' }
    };

    html2pdf().set(opt).from(element).save().then(() => {
      // Clean up the class after the PDF is generated
      element.classList.remove('pdf-export-mode');
    });
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear the form? (Saved dropdowns will not be deleted)")) {
      document.querySelectorAll('#pdf-content input').forEach(input => {
        if (input.type === 'checkbox' || input.type === 'radio') {
          input.checked = false;
        } else if (input.type !== 'button') {
          input.value = '';
        }
      });
      window.scrollTo(0, 0);
    }
  };

  const handleSave = async () => {
    const formData = {};
    document.querySelectorAll('#pdf-content input').forEach((input, index) => {
      const key = input.id || `auto-field-${index}`;
      if (input.type === 'checkbox' || input.type === 'radio') {
        formData[key] = input.checked;
      } else {
        formData[key] = input.value;
      }
    });
    
    let identifier = "Unknown";
    const inputs = Array.from(document.querySelectorAll('#pdf-content input[type="text"]'));
    if (inputs.length > 0 && inputs[0].value) {
      identifier = inputs[0].value;
    }

    const newSubmission = {
      date: new Date().toLocaleString(),
      name: identifier,
      data: formData
    };

    try {
      await addDoc(collection(db, "applications"), newSubmission);
      alert("Form saved to Firebase successfully!");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error saving to Firebase. Check console and configuration.");
    }
  };

  const handleLoad = (submission) => {
    if (window.confirm("Loading this submission will overwrite current form data. Continue?")) {
      document.querySelectorAll('#pdf-content input').forEach((input, index) => {
        const key = input.id || `auto-field-${index}`;
        if (submission.data.hasOwnProperty(key)) {
          if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = submission.data[key];
          } else {
            input.value = submission.data[key];
          }
        }
      });
      window.scrollTo(0, 0);
      alert("Data loaded successfully!");
    }
  };

  const handlePrintSubmission = (submission) => {
    // Load the data silently
    document.querySelectorAll('#pdf-content input').forEach((input, index) => {
      const key = input.id || `auto-field-${index}`;
      if (submission.data.hasOwnProperty(key)) {
        if (input.type === 'checkbox' || input.type === 'radio') {
          input.checked = submission.data[key];
        } else {
          input.value = submission.data[key];
        }
      }
    });
    // Print immediately
    setTimeout(() => {
      window.print();
    }, 500);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record from Firebase?")) {
      try {
        await deleteDoc(doc(db, "applications", id));
      } catch (e) {
        console.error("Error deleting document: ", e);
        alert("Error deleting from Firebase.");
      }
    }
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

      {/* Submissions Database Table */}
      <div className="db-container">
        <h2 className="db-header">
          <span>Saved Applications</span>
          <span className="db-badge">Live Database</span>
        </h2>
        {submissions.length > 0 ? (
          <div className="db-table-wrapper">
            <table className="db-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Applicant Info</th>
                  <th style={{textAlign: 'center'}}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((sub, index) => (
                  <tr key={sub.id}>
                    <td>#{submissions.length - index}</td>
                    <td>{sub.date}</td>
                    <td style={{fontWeight: 'bold'}}>{sub.name}</td>
                    <td className="actions">
                      <button 
                        className="btn btn-load"
                        onClick={() => handleLoad(sub)}
                        title="Load into form"
                      >
                        Load
                      </button>
                      <button 
                        className="btn btn-print"
                        onClick={() => handlePrintSubmission(sub)}
                        title="Load and Print immediately"
                      >
                        Print
                      </button>
                      <button 
                        className="btn btn-delete"
                        onClick={() => handleDelete(sub.id)}
                        title="Delete from database"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="db-empty">
            <p>No saved applications found in the database.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
