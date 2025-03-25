import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CreateMedical from "./components/CreateMedical";
import MedicalList from "./components/MedicalList";
import MedicalDetails from "./components/MedicalDetails";

// Add new imports for the Visa, Document, and Upload components
import CreateVisa from "./components/CreateVisa";
import ListVisa from "./components/ListeVisa";
import CreateDocument from "./components/CreateDocument";
import ListDocument from "./components/ListeDocument";
import DocumentUploadComponent from "./components/DocumentUploadComponent";
import DocumentListComponent from "./components/DocumentListComponent";
import './App.css'; 
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/create">Créer un dossier médical</Link>
        <Link to="/list">Liste des dossiers médicaux</Link>
        <Link to="/details">Rechercher par ID</Link>

        {/* Add new navigation links for Visa and Document */}
        <Link to="/create-visa">Créer un visa</Link>
        <Link to="/list-visa">Liste des visas</Link>
        <Link to="/create-document">Créer un document</Link>
        <Link to="/list-document">Liste des documents</Link>

        {/* Add navigation links for Document Upload and List */}
        <Link to="/upload-document">Téléverser un document Academic</Link>
        <Link to="/document-list">Liste des documents Academics téléversés</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MedicalList />} />
        <Route path="/create" element={<CreateMedical />} />
        <Route path="/list" element={<MedicalList />} />
        <Route path="/details" element={<MedicalDetails />} />

        {/* Add new routes for Visa and Document components */}
        <Route path="/create-visa" element={<CreateVisa />} />
        <Route path="/list-visa" element={<ListVisa />} />
        <Route path="/create-document" element={<CreateDocument />} />
        <Route path="/list-document" element={<ListDocument />} />

        {/* Add new routes for Document Upload and List */}
        <Route path="/upload-document" element={<DocumentUploadComponent />} />
        <Route path="/document-list" element={<DocumentListComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
