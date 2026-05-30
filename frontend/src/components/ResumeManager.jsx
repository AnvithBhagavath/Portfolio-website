import React, { useState, useEffect } from 'react';
import { FileText, Upload, Download, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';

const API_BASE = 'http://localhost:5000/api/resume';

const ResumeManager = () => {
  const [status, setStatus] = useState({ exists: false, updatedAt: null });
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const fetchStatus = async () => {
    try {
      const res = await fetch(`${API_BASE}/status`);
      if (res.ok) {
        const data = await res.json();
        setStatus(data);
      }
    } catch (err) {
      console.error('Error fetching resume status:', err);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  const handleDownload = () => {
    window.open(API_BASE, '_blank');
  };

  const uploadFile = async (file) => {
    if (!file) return;
    
    if (file.type !== 'application/pdf') {
      setError('Only PDF files are allowed.');
      return;
    }

    setUploading(true);
    setMessage('');
    setError('');

    const formData = new FormData();
    formData.append('resume', file);

    try {
      const res = await fetch(`${API_BASE}/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
        fetchStatus();
      } else {
        setError(data.message || 'Failed to upload resume.');
      }
    } catch (err) {
      setError('Error communicating with backend server.');
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      uploadFile(e.target.files[0]);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      uploadFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Manage Portfolio Resume</h3>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
          Download the current active resume or upload a new PDF to update the download link on this site.
        </p>
      </div>

      <div className="resume-status-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FileText size={20} color={status.exists ? '#10b981' : '#f59e0b'} />
          <div>
            <div style={{ fontWeight: '500' }}>
              {status.exists ? (
                <span className="status-badge">
                  <CheckCircle size={14} /> Resume Active (resume.pdf)
                </span>
              ) : (
                <span className="status-badge missing">
                  <AlertCircle size={14} /> No Resume Uploaded
                </span>
              )}
            </div>
            {status.exists && status.updatedAt && (
              <div style={{ fontSize: '10.5px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                Uploaded: {new Date(status.updatedAt).toLocaleString()}
              </div>
            )}
          </div>
        </div>

        {status.exists && (
          <button className="resume-button" onClick={handleDownload} style={{ padding: '6px 12px', fontSize: '12px' }}>
            <Download size={14} /> Download
          </button>
        )}
      </div>

      <div 
        className={`resume-uploader ${dragActive ? 'dragover' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <Upload size={32} color="var(--text-secondary)" style={{ marginBottom: '8px' }} />
        <p style={{ fontSize: '13px', marginBottom: '12px' }}>
          Drag & Drop your resume PDF here
        </p>
        <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '12px' }}>
          - or -
        </span>
        <label className="resume-button">
          {uploading ? (
            <>
              <RefreshCw size={14} style={{ animation: 'spin 1.5s linear infinite' }} /> Uploading...
            </>
          ) : (
            <>Select PDF File</>
          )}
          <input 
            type="file" 
            className="upload-input" 
            accept=".pdf" 
            onChange={handleFileChange}
            disabled={uploading}
          />
        </label>
      </div>

      {message && (
        <div style={{ color: '#10b981', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <CheckCircle size={14} /> {message}
        </div>
      )}

      {error && (
        <div style={{ color: '#ef4444', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <AlertCircle size={14} /> {error}
        </div>
      )}
    </div>
  );
};

export default ResumeManager;
