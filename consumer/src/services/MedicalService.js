import axios from "axios";

const API_URL = "http://localhost:8080/ws"; // L'URL de votre backend SOAP

// Récupérer tous les dossiers médicaux
export const getAllMedicals = async () => {
    const response = await axios.post(`${API_URL}`, `
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                          xmlns:ex="http://example.com/soapservice">
            <soapenv:Header/>
            <soapenv:Body>
                <ex:GetMedicalRequest/>
            </soapenv:Body>
        </soapenv:Envelope>
    `, {
        headers: { "Content-Type": "text/xml" }
    });
    return response.data;
};

// Ajouter un dossier médical
export const createMedical = async (patientName, diagnosis, date) => {
    const response = await axios.post(`${API_URL}`, `
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                          xmlns:ex="http://example.com/soapservice">
            <soapenv:Header/>
            <soapenv:Body>
                <ex:createMedicalRequest>
                    <patientName>${patientName}</patientName>
                    <diagnosis>${diagnosis}</diagnosis>
                    <date>${date}</date>
                </ex:createMedicalRequest>
            </soapenv:Body>
        </soapenv:Envelope>
    `, {
        headers: { "Content-Type": "text/xml" }
    });
    return response.data;
};

// Récupérer tous les dossiers médicaux
export const getMedicalById = async (id) => {
    const response = await axios.post(`${API_URL}`, `
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                  xmlns:med="http://example.com/soapservice">
   <soapenv:Header/>
   <soapenv:Body>
      <med:getMedicalByIdRequest>
         <id>${id}</id>
      </med:getMedicalByIdRequest>
   </soapenv:Body>
</soapenv:Envelope>
    `, {
        headers: { "Content-Type": "text/xml" }
    });
    return response.data;
};