package pi.tn.medical.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pi.tn.medical.entity.Medical;
import pi.tn.medical.repository.MedicalRepository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class MedicalService {

    private final MedicalRepository medicalRepository;

    @Autowired
    public MedicalService(MedicalRepository medicalRepository) {
        this.medicalRepository = medicalRepository;
    }

    public List<Medical> getAllMedicals() {
        return medicalRepository.findAll();
    }

    public Optional<Medical> getMedicalById(Long id) {
        return medicalRepository.findById(id);
    }

    public Medical addMedical(Medical medical) {
        if (medical.getDate() == null) {
            medical.setDate(new Date()); // Si la date est null, initialiser à la date actuelle
        }
        return medicalRepository.save(medical);
    }
}
