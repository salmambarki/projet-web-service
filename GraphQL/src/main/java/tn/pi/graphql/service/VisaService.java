package tn.pi.graphql.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.pi.graphql.entities.Document;
import tn.pi.graphql.entities.Visa;
import tn.pi.graphql.repositories.VisaRepository;
import tn.pi.graphql.repositories.DocumentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class VisaService {
    @Autowired
    private VisaRepository visaRepository;

    @Autowired
    private DocumentRepository documentRepository; // Correction pour injecter DocumentRepository

    public List<Visa> getVisas() {
        return visaRepository.findAll();
    }

    public Optional<Visa> getVisa(int id) {
        return visaRepository.findById(id);
    }

    public Visa addVisa(int documentId, Visa visa) {
        try {
            if (documentId > 0) {
                Optional<Document> document = documentRepository.findById(documentId); // Utilisation correcte
                if (document.isPresent()) {
                    visa.setDocument(document.get()); // Stocker uniquement l'ID du document dans Visa
                } else {
                    throw new RuntimeException("Document not found with ID: " + documentId);
                }
            }
            return visaRepository.save(visa);
        } catch (Exception e) {
            e.printStackTrace(); // Affiche l'erreur complète dans les logs
            throw new RuntimeException("Erreur lors de l'ajout du visa: " + e.getMessage());
        }
    }
}
