package tn.pi.graphql.apigraph;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import tn.pi.graphql.entities.Document;
import tn.pi.graphql.entities.Visa;
import tn.pi.graphql.service.DocumentService;
import tn.pi.graphql.service.VisaService;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class Api {
    @Autowired
    private VisaService visaService;

    @Autowired
    private DocumentService documentService;

    @QueryMapping
    public List<Visa> getVisas() {
        return visaService.getVisas();
    }

    @QueryMapping
    public Visa getVisa(@Argument int id) {
        return visaService.getVisa(id).orElse(null);
    }

    @MutationMapping
    public Visa addVisa(@Argument int documentId, @Argument Visa visa) {
        return visaService.addVisa(documentId, visa);
    }

    @QueryMapping
    public List<Document> getDocuments() {
        return documentService.getDocuments();
    }

    @QueryMapping
    public Document getDocument(@Argument int id) {
        return documentService.getDocument(id).orElse(null);
    }

    @MutationMapping
    public Document addDocument(@Argument Document document) {
        return documentService.addDocument(document);
    }
}
