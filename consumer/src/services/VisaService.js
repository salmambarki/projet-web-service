import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8081/graphql', // Update the URL if needed
  cache: new InMemoryCache(),
});

export const GET_VISAS = gql`
  query {
    getVisas {
      id
      numeroVisa
      pays
      dateEmission
      dateExpiration
      titulaireNom
      titulairePrenom
      passportNumero
      typeVisa
      statut
      document {
        id
        type
      }
    }
  }
`;

export const GET_VISA = gql`
  query GetVisa($id: ID!) {
    getVisa(id: $id) {
      id
      numeroVisa
      pays
      dateEmission
      dateExpiration
      titulaireNom
      titulairePrenom
      passportNumero
      typeVisa
      statut
      document {
        id
        type
      }
    }
  }
`;

export const CREATE_VISA = gql`
  mutation AddVisa($documentId: Int, $visa: VisaInput) {
    addVisa(documentId: $documentId, visa: $visa) {
      id
      numeroVisa
      pays
      dateEmission
      dateExpiration
      titulaireNom
      titulairePrenom
      passportNumero
      typeVisa
      statut
      document {
        id
        type
      }
    }
  }
`;

export const fetchVisas = () => client.query({ query: GET_VISAS });
export const fetchVisa = (id) => client.query({ query: GET_VISA, variables: { id } });
export const createVisa = (documentId, visaInput) => client.mutate({ mutation: CREATE_VISA, variables: { documentId, visa: visaInput } });
