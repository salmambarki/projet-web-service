import React, { useState } from "react";
import { getMedicalById } from "../services/MedicalService";
import '../styles/MedicalDetails.css';
const MedicalDetails = () => {
    const [id, setId] = useState("");
    const [medical, setMedical] = useState(null);

    const handleSearch = async () => {
        try {
            const data = await getMedicalById(id);
            setMedical(data);
        } catch (error) {
            console.error("Dossier médical introuvable", error);
        }
    };

    return (
<div className="medical-details-container">
    <h2>Rechercher un dossier médical</h2>
    <input 
        type="number" 
        value={id} 
        onChange={(e) => setId(e.target.value)} 
        placeholder="ID du dossier" 
    />
    <button onClick={handleSearch}>Rechercher</button>
    {medical && (
        <div className="medical-info">
            <h3>Détails du dossier</h3>
            <p>Nom: {medical.patientName}</p>
            <p>Diagnostic: {medical.diagnosis}</p>
            <p>Date: {medical.date}</p>
        </div>
    )}
</div>

    );
};

export default MedicalDetails;
