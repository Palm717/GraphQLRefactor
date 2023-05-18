const { gql } = require("apollo-server-express");

const queryType = gql`
  type Query {
    users: [User]
    user(username: String!): User
  }
`;

module.exports = queryType;
