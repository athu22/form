import React, { useRef } from 'react';
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

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const element = formRef.current;
    
    // Create a clone to fix inputs for html2pdf
    // Note: html2pdf/html2canvas can struggle with input values. 
    // Best practice for perfect A4 is actually printing to PDF via the browser,
    // but we will provide this download function as well.
    const opt = {
      margin:       0,
      filename:     'government_form.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
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
