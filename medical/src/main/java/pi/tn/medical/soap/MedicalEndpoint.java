package pi.tn.medical.soap;

import jakarta.transaction.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.ws.server.endpoint.annotation.*;
import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlRootElement;
import pi.tn.medical.entity.Medical;
import pi.tn.medical.repository.MedicalRepository;

import java.util.Date;
import java.util.List;

@Endpoint
@CrossOrigin("*")
public class MedicalEndpoint {
    private static final String NAMESPACE_URI = "http://example.com/soapservice";
    private final MedicalRepository repository;

    public MedicalEndpoint(MedicalRepository repository) {
        this.repository = repository;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "GetMedicalRequest")
    @ResponsePayload
    public GetMedicalResponse getMedicals() {
        GetMedicalResponse response = new GetMedicalResponse();
        response.setMedicals(repository.findAll());
        return response;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "createMedicalRequest")
    @ResponsePayload
    @Transactional
    public CreateMedicalResponse createMedical(@RequestPayload CreateMedicalRequest request) {
        Medical medical = new Medical();
        medical.setPatientName(request.getPatientName());
        medical.setDiagnosis(request.getDiagnosis());

        if (request.getDate() == null) {
            medical.setDate(new Date()); // Set current date if no date is provided
        } else {
            medical.setDate(request.getDate());
        }

        Medical savedMedical = repository.save(medical);

        CreateMedicalResponse response = new CreateMedicalResponse();
        response.setMedical(savedMedical);
        return response;
    }

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "getMedicalByIdRequest")
    @ResponsePayload
    public GetMedicalByIdResponse getMedicalById(@RequestPayload GetMedicalByIdRequest request) {
        Medical medical = repository.findById(request.getId())
                .orElseThrow(() -> new RuntimeException("Medical not found with id: " + request.getId()));

        GetMedicalByIdResponse response = new GetMedicalByIdResponse();
        response.setMedical(medical);
        return response;
    }

    @XmlRootElement(namespace = NAMESPACE_URI)
    public static class GetMedicalResponse {
        private List<Medical> medicals;

        @XmlElement(name = "medical")
        public List<Medical> getMedicals() {
            return medicals;
        }

        public void setMedicals(List<Medical> medicals) {
            this.medicals = medicals;
        }
    }

    @XmlRootElement(namespace = NAMESPACE_URI)
    public static class CreateMedicalRequest {
        private String patientName;
        private String diagnosis;
        private Date date;

        @XmlElement(name = "patientName")
        public String getPatientName() {
            return patientName;
        }

        public void setPatientName(String patientName) {
            this.patientName = patientName;
        }

        @XmlElement(name = "diagnosis")
        public String getDiagnosis() {
            return diagnosis;
        }

        public void setDiagnosis(String diagnosis) {
            this.diagnosis = diagnosis;
        }

        @XmlElement(name = "date")
        public Date getDate() {
            return date;
        }

        public void setDate(Date date) {
            this.date = date;
        }
    }

    @XmlRootElement(namespace = NAMESPACE_URI)
    public static class CreateMedicalResponse {
        private Medical medical;

        @XmlElement(name = "medical")
        public Medical getMedical() {
            return medical;
        }

        public void setMedical(Medical medical) {
            this.medical = medical;
        }
    }

    @XmlRootElement(namespace = NAMESPACE_URI)
    public static class GetMedicalByIdRequest {
        private Long id;

        @XmlElement(name = "id")
        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }
    }

    @XmlRootElement(namespace = NAMESPACE_URI)
    public static class GetMedicalByIdResponse {
        private Medical medical;

        @XmlElement(name = "medical")
        public Medical getMedical() {
            return medical;
        }

        public void setMedical(Medical medical) {
            this.medical = medical;
        }
    }
}
