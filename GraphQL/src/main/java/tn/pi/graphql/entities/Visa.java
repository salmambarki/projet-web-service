package tn.pi.graphql.entities;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Visa {
    @Id
    private int id;
    private String numeroVisa;
    private String pays;
    private LocalDate dateEmission;
    private LocalDate dateExpiration;
    private String titulaireNom;
    private String titulairePrenom;
    private String passportNumero;
    private String typeVisa;
    private String statut;

    @ManyToOne
    @JoinColumn(name = "document_id") // Stocke uniquement l'ID du document
    private Document document;

    // Getters et Setters
    public Document getDocument() {
        return document;
    }

    public void setDocument(Document document) {
        this.document = document;
    }

    public String getStatut() {
        return statut;
    }

    public void setStatut(String statut) {
        this.statut = statut;
    }

    public String getTypeVisa() {
        return typeVisa;
    }

    public void setTypeVisa(String typeVisa) {
        this.typeVisa = typeVisa;
    }

    public String getPassportNumero() {
        return passportNumero;
    }

    public void setPassportNumero(String passportNumero) {
        this.passportNumero = passportNumero;
    }

    public String getTitulairePrenom() {
        return titulairePrenom;
    }

    public void setTitulairePrenom(String titulairePrenom) {
        this.titulairePrenom = titulairePrenom;
    }

    public String getTitulaireNom() {
        return titulaireNom;
    }

    public void setTitulaireNom(String titulaireNom) {
        this.titulaireNom = titulaireNom;
    }

    public LocalDate getDateExpiration() {
        return dateExpiration;
    }

    public void setDateExpiration(LocalDate dateExpiration) {
        this.dateExpiration = dateExpiration;
    }

    public LocalDate getDateEmission() {
        return dateEmission;
    }

    public void setDateEmission(LocalDate dateEmission) {
        this.dateEmission = dateEmission;
    }

    public String getPays() {
        return pays;
    }

    public void setPays(String pays) {
        this.pays = pays;
    }

    public String getNumeroVisa() {
        return numeroVisa;
    }

    public void setNumeroVisa(String numeroVisa) {
        this.numeroVisa = numeroVisa;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
