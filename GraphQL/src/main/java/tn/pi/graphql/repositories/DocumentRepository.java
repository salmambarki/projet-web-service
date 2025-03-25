package tn.pi.graphql.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.pi.graphql.entities.Document;


public interface DocumentRepository extends JpaRepository<Document, Integer> {
}
