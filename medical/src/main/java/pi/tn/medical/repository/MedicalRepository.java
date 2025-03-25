package pi.tn.medical.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pi.tn.medical.entity.Medical;

@Repository
public interface MedicalRepository extends JpaRepository<Medical, Long> {
}
