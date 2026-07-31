import React from 'react';
import { Save, Printer, Download, Trash2, Eye, RefreshCw } from 'lucide-react';

const ActionButtons = ({ onSave, onPreview, onPrint, onDownload, onClear, isEditing }) => {
  return (
    <div className="floating-actions no-print" style={styles.container}>
      <button 
        onClick={onSave} 
        style={{...styles.button, backgroundColor: isEditing ? '#0dcaf0' : '#0d6efd', color: isEditing ? '#000' : '#fff'}} 
        title={isEditing ? "Update Database" : "Save to Database"}
      >
        {isEditing ? <RefreshCw size={18} /> : <Save size={18} />} 
        <span style={styles.label}>{isEditing ? "Update" : "Save"}</span>
      </button>
      <button onClick={onPreview} style={{...styles.button, backgroundColor: '#6f42c1'}} title="View Database">
        <Eye size={18} /> <span style={styles.label}>View DB</span>
      </button>
      <button onClick={onPrint} style={{...styles.button, backgroundColor: '#198754'}} title="Print">
        <Printer size={18} /> <span style={styles.label}>Print</span>
      </button>
      <button onClick={onDownload} style={{...styles.button, backgroundColor: '#fd7e14'}} title="Download PDF">
        <Download size={18} /> <span style={styles.label}>Download</span>
      </button>
      <button onClick={onClear} style={{ ...styles.button, backgroundColor: '#dc3545' }} title="Clear Form">
        <Trash2 size={18} color="#fff" /> <span style={styles.label}>Clear Form</span>
      </button>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    zIndex: 1000,
  },
  button: {
    backgroundColor: '#0d6efd',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    padding: '12px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    whiteSpace: 'nowrap'
  }
};

export default ActionButtons;
