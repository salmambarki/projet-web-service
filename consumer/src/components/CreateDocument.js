// components/CreateDocument.js

import React, { useState } from 'react';
import { createDocument } from '../services/DocumentService';
import '../styles/CreateDocument.css'; // Importation de la feuille de style

function CreateDocument() {
  const [document, setDocument] = useState({
    type: '',
    contenu: '',
    id:''
  });

  const handleChange = (e) => {
    setDocument({
      ...document,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createDocument(document);
      alert('Document créé avec succès');
    } catch (error) {
      console.error(error);
      alert('Échec de la création du document');
    }
  };

  return (
    <div className="create-document-container">
      <h2 className="create-document-title">Créer un Document</h2>
      <form className="create-document-form" onSubmit={handleSubmit}>
      <input
          type="number"
          name="id"
          value={document.id}
          onChange={handleChange}
          placeholder="id de Document"
        />
        
        <input
          type="text"
          name="type"
          value={document.type}
          onChange={handleChange}
          placeholder="Type de Document"
        />
        <textarea
          name="contenu"
          value={document.contenu}
          onChange={handleChange}
          placeholder="Contenu du Document"
        />
        <button type="submit">Créer le Document</button>
      </form>
    </div>
  );
}

export default CreateDocument;
