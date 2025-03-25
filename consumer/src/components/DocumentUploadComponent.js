import React, { useState } from 'react';
import DocumentAcademicService from '../services/DocumentAcademicService';
import '../styles/DocumentUploadComponent.css';  // Importez le fichier CSS

const DocumentUploadComponent = () => {
  const [file, setFile] = useState(null);
  const [type, setType] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file || !type || !studentName || !studentEmail) {
      setMessage('Please fill all fields.');
      return;
    }

    DocumentAcademicService.addDocument(file, type, studentName, studentEmail)
      .then((response) => {
        setMessage('Document uploaded successfully.');
        // Optionally reset the form fields after successful upload
        setFile(null);
        setType('');
        setStudentName('');
        setStudentEmail('');
      })
      .catch((error) => {
        setMessage('Failed to upload document.');
        console.error(error);
      });
  };

  return (
    <div className="upload-document-container">
      <h3 className="upload-document-title">Upload Document</h3>
      <input
        type="file"
        className="upload-input"
        onChange={handleFileChange}
      />
      <input
        type="text"
        className="upload-input"
        placeholder="Document Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <input
        type="text"
        className="upload-input"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <input
        type="email"
        className="upload-input"
        placeholder="Student Email"
        value={studentEmail}
        onChange={(e) => setStudentEmail(e.target.value)}
      />
      <button className="upload-button" onClick={handleUpload}>Télécharger</button>
      {message && <p className="upload-message">{message}</p>}
    </div>
  );
};

export default DocumentUploadComponent;
