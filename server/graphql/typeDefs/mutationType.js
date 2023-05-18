const { gql } = require("apollo-server-express");

const mutationType = gql`
  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
    saveBook(userId: ID!, bookId: String!): User
    deleteBook(userId: ID!, bookId: String!): User
  }
`;

module.exports = mutationType;
