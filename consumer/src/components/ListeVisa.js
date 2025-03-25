import React, { useEffect, useState } from 'react';
import { fetchVisas } from '../services/VisaService';
import '../styles/ListeVisa.css';

function ListeVisa() {
  const [visas, setVisas] = useState([]);

  useEffect(() => {
    const getVisas = async () => {
      try {
        const { data } = await fetchVisas();
        setVisas(data.getVisas);
      } catch (error) {
        console.error(error);
      }
    };
    getVisas();
  }, []);

  return (
    <div className="visa-list-container">
      <h2 className="visa-list-title">Liste des Visas</h2>
      <ul className="visa-list">
        {visas.map((visa) => (
          <li key={visa.id} className="visa-list-item">
            <p>{visa.numeroVisa} - {visa.pays} - {visa.statut}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListeVisa;
