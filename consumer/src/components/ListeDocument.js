import React, { useEffect, useState } from 'react';
import { fetchDocuments } from '../services/DocumentService';
import '../styles/ListeDocument.css'; // Importez le fichier CSS

function ListeDocument() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const getDocuments = async () => {
      try {
        const { data } = await fetchDocuments();
        setDocuments(data.getDocuments);
      } catch (error) {
        console.error(error);
      }
    };
    getDocuments();
  }, []);

  return (
    <div className="document-list-container">
      <h2 className="document-list-title">Liste des documents</h2>
      <ul className="document-list">
        {documents.map((doc) => (
          <li key={doc.id} className="document-list-item">
            <p>
              <span>{doc.type}</span> - {doc.contenu}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListeDocument;
