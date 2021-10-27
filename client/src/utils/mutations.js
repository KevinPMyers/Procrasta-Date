import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $username, password: $password) {
      token
      user {
        _id
        
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        
      }
    }
  }
`;

export const ADD_Date = gql `
  mutation addDate( $datename: String! ) {
    addDate(datename: $datename) {
      _id
      datename
      createdAt
      username
      recipes
      music

    }
  }
`