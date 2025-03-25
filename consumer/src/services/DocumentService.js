import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8081/graphql',
  cache: new InMemoryCache(),
});

export const GET_DOCUMENTS = gql`
  query {
    getDocuments {
      id
      type
      contenu
    }
  }
`;

export const GET_DOCUMENT = gql`
  query GetDocument($id: ID!) {
    getDocument(id: $id) {
      id
      type
      contenu
    }
  }
`;

export const CREATE_DOCUMENT = gql`
  mutation AddDocument($document: DocumentInput) {
    addDocument(document: $document) {
      id
      type
      contenu
    }
  }
`;

export const fetchDocuments = () => client.query({ query: GET_DOCUMENTS });
export const fetchDocument = (id) => client.query({ query: GET_DOCUMENT, variables: { id } });
export const createDocument = (documentInput) => client.mutate({ mutation: CREATE_DOCUMENT, variables: { document: documentInput } });
