import { gql } from '@apollo/client';

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

// TODO: make sure change from CREATE_USER to ADD_USER didn't create bugs
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($book: BookInput!) {
    saveBook(book: $book) {
      _id
      description
      bookId
      image
      link
      title
      authors
    }
  }
`;

// TODO: make sure change from DELETE_BOOK to REMOVE_BOOK didn't create bugs
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    deleteBook(bookId: $bookId) {
      _id
      description
      bookId
      image
      link
      title
      authors
    }
  }
`;
