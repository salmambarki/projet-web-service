import React, { useState, useEffect } from 'react';
import DocumentAcademicService from '../services/DocumentAcademicService';
import "../styles/DocumentListComponent.css";

const DocumentListComponent = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    DocumentAcademicService.getAllDocuments()
      .then((response) => {
        setDocuments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching documents:', error);
      });
  }, []);

  const handleDownload = (id) => {
    DocumentAcademicService.getDocumentById(id)
      .then((response) => {
        const file = new Blob([response.data], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        const a = document.createElement('a');
        a.href = fileURL;
        a.download = 'document.pdf';
        a.click();
      })
      .catch((error) => {
        console.error('Error downloading document:', error);
      });
  };

  return (
    <div className="document-list-container">
      <h3>Documents</h3>
      <ul>
        {documents.map((document) => (
          <li key={document.id}>
            <p>{document.type}</p>
            <button onClick={() => handleDownload(document.id)}>Télécharger</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentListComponent;