// imported the gql for the mutation
import { gql } from '@apollo/client';

// export the login user by their dependencies
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// export the add user by their dependencies
export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!, $firstName: String!, $lastName: String!, $phone: String!, $affiliation: String!) {
    addUser(username: $username, password: $password, email: $email, firstName: $firstName, lastName: $lastName, phone: $phone, affiliation: $affiliation) {
      token
      user {
        username
        _id
        email
        firstName
        lastName
        phone
        affiliation
      }
    }
  }
`;
