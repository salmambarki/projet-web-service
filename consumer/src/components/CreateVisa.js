import React, { useState } from 'react';
import { createVisa } from '../services/VisaService';
import "../styles/CreateVisa.css";
function CreateVisa() {
  const [visa, setVisa] = useState({
    numeroVisa: '',
    pays: '',
    dateEmission: '',
    dateExpiration: '',
    titulaireNom: '',
    titulairePrenom: '',
    passportNumero: '',
    typeVisa: '',
    statut: '',
  });
  const [documentId, setDocumentId] = useState('');

  const handleChange = (e) => {
    setVisa({
      ...visa,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createVisa(parseInt(documentId), visa);
      alert('Visa created successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to create visa');
    }
  };

  return (
    <div className="container">
      <h2>Create Visa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="numeroVisa"
          value={visa.numeroVisa}
          onChange={handleChange}
          placeholder="Visa Number"
        />
        <input
          type="text"
          name="pays"
          value={visa.pays}
          onChange={handleChange}
          placeholder="Country"
        />
        <input
          type="date"
          name="dateEmission"
          value={visa.dateEmission}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dateExpiration"
          value={visa.dateExpiration}
          onChange={handleChange}
        />
        <input
          type="text"
          name="titulaireNom"
          value={visa.titulaireNom}
          onChange={handleChange}
          placeholder="Holder Last Name"
        />
        <input
          type="text"
          name="titulairePrenom"
          value={visa.titulairePrenom}
          onChange={handleChange}
          placeholder="Holder First Name"
        />
        <input
          type="text"
          name="passportNumero"
          value={visa.passportNumero}
          onChange={handleChange}
          placeholder="Passport Number"
        />
        <input
          type="text"
          name="typeVisa"
          value={visa.typeVisa}
          onChange={handleChange}
          placeholder="Visa Type"
        />
        <input
          type="text"
          name="statut"
          value={visa.statut}
          onChange={handleChange}
          placeholder="Status"
        />
        <input
          type="number"
          name="documentId"
          value={documentId}
          onChange={(e) => setDocumentId(e.target.value)}
          placeholder="Document ID"
        />
        <button type="submit">Create Visa</button>
      </form>
    </div>
  );
}

export default CreateVisa;
