package tn.pi.graphql.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.pi.graphql.entities.Document;
import tn.pi.graphql.entities.Visa;
import tn.pi.graphql.repositories.DocumentRepository;
import tn.pi.graphql.repositories.VisaRepository;

import java.util.List;
import java.util.Optional;

@Service
public class DocumentService {
    @Autowired
    private DocumentRepository documentRepository;
    private VisaRepository visaRepository;

    public List<Document> getDocuments() {
        return documentRepository.findAll();
    }

    public Optional<Document> getDocument(int id) {
        return documentRepository.findById(id);
    }

    public Document addDocument(Document document) {
        return documentRepository.save(document);
    }
}
