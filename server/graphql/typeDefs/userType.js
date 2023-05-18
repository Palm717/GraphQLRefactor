const { gql } = require("apollo-server-express");

const userType = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }
`;

module.exports = userType;
