import React, { useEffect, useState } from "react";
import { getAllMedicals } from "../services/MedicalService";
import "../styles/MedicalList.css";  // Importez le fichier CSS

const MedicalList = () => {
  const [medicals, setMedicals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedicals = async () => {
      try {
        const response = await getAllMedicals();
        console.log("Données brutes reçues:", response);

        // Parser la réponse SOAP (XML)
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response, "text/xml");

        // Extraire les nœuds <medical>
        const medicalNodes = xmlDoc.getElementsByTagName("medical");
        const medicalsArray = [];

        for (let i = 0; i < medicalNodes.length; i++) {
          const medical = medicalNodes[i];

          medicalsArray.push({
            id: medical.getElementsByTagName("id")[0].textContent,
            patientName: medical.getElementsByTagName("patientName")[0].textContent,
            diagnosis: medical.getElementsByTagName("diagnosis")[0].textContent,
            date: medical.getElementsByTagName("date")[0].textContent,
          });
        }

        console.log("Données extraites:", medicalsArray);
        setMedicals(medicalsArray);
      } catch (error) {
        console.error("Erreur lors de la récupération des dossiers médicaux :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMedicals();
  }, []);

  return (
    <div className="medical-list-container">
      <h2 className="medical-list-title">Liste des dossiers médicaux</h2>
      {loading ? (
        <p className="loading-message">Chargement des données...</p>
      ) : medicals.length > 0 ? (
        <ul className="medical-list">
          {medicals.map((medical) => (
            <li key={medical.id} className="medical-list-item">
              <p>
                <span>{medical.patientName}</span> - {medical.diagnosis} - {medical.date}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-medicals-message">Aucun dossier médical trouvé.</p>
      )}
    </div>
  );
};

export default MedicalList;
