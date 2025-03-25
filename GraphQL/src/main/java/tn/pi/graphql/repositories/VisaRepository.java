package tn.pi.graphql.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.pi.graphql.entities.Visa;


@Repository
public interface VisaRepository extends JpaRepository<Visa, Integer> {

}
