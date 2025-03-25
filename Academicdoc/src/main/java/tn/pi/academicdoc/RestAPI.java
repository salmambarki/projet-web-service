package tn.pi.academicdoc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
@CrossOrigin("*")
@RestController
@RequestMapping("/service")
public class RestAPI {

    @Autowired
    private DocumentRepository documentRepository;

    @GetMapping("/documents")
    public List<Document> getAllDocuments() {
        return documentRepository.findAll();
    }

    @GetMapping("/documents/{id}")
    public ResponseEntity<byte[]> getDocument(@PathVariable int id) {
        Optional<Document> document = documentRepository.findById(id);
        if (document.isPresent()) {
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=document.pdf")
                    .contentType(MediaType.APPLICATION_PDF)
                    .body(document.get().getDocumentContent());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping(value = "/documents", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Document addDocument(
            @RequestParam("file") MultipartFile file,
            @RequestParam("type") String type,
            @RequestParam("studentName") String studentName,
            @RequestParam("studentEmail") String studentEmail) throws IOException {

        Document document = new Document();
        document.setType(type);
        document.setStudentName(studentName);
        document.setStudentEmail(studentEmail);
        document.setDocumentContent(file.getBytes());
        return documentRepository.save(document);
    }
}
