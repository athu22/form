import React from 'react';
import { Save, Printer, Download, Trash2, Eye } from 'lucide-react';

const ActionButtons = ({ onSave, onPreview, onPrint, onDownload, onClear }) => {
  return (
    <div className="floating-actions no-print" style={styles.container}>
      <button onClick={onSave} style={styles.button} title="Save Draft">
        <Save size={20} />
      </button>
      <button onClick={onPreview} style={styles.button} title="Preview PDF">
        <Eye size={20} />
      </button>
      <button onClick={onPrint} style={styles.button} title="Print">
        <Printer size={20} />
      </button>
      <button onClick={onDownload} style={styles.button} title="Download PDF">
        <Download size={20} />
      </button>
      <button onClick={onClear} style={{ ...styles.button, backgroundColor: '#dc3545' }} title="Clear Form">
        <Trash2 size={20} color="#fff" />
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
    gap: '10px',
    zIndex: 1000,
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  }
};

export default ActionButtons;
