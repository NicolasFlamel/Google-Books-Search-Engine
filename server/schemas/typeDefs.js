const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID!
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
    authors: [String]
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  input BookInput {
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
    authors: [String]
  }

  type Query {
    me: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(book: BookInput!): User
    deleteBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
