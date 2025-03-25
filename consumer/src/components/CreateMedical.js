import React, { useState } from "react";
import { createMedical } from "../services/MedicalService";
import "../styles/CreateMedical.css"; // Importation de la feuille de style

const CreateMedical = () => {
  const [patientName, setPatientName] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createMedical(patientName, diagnosis, date);
      alert("Dossier médical ajouté avec succès !");
      setPatientName("");
      setDiagnosis("");
      setDate("");
    } catch (error) {
      console.error("Erreur lors de l'ajout du dossier médical", error);
    }
  };

  return (
    <div className="container">
      <h2>Créer un dossier médical</h2>
      <form onSubmit={handleSubmit}>
        <label>Nom du patient :</label>
        <input
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />
        <label>Diagnostic :</label>
        <input
          type="text"
          value={diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
          required
        />
        <label>Date :</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default CreateMedical;
