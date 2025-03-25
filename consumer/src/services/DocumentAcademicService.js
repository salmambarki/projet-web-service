import axios from 'axios';

const API_URL = 'http://localhost:8082/service/documents';

class DocumentAcademicService {
  // Get all documents
  getAllDocuments() {
    return axios.get(API_URL);
  }

  // Get document by ID
  getDocumentById(id) {
    return axios.get(`${API_URL}/${id}`, { responseType: 'arraybuffer' });
  }

  // Add a new document
  addDocument(file, type, studentName, studentEmail) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);
    formData.append('studentName', studentName);
    formData.append('studentEmail', studentEmail);

    return axios.post(API_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
}

// Assign instance to a variable before exporting
const documentAcademicService = new DocumentAcademicService();

export default documentAcademicService;
