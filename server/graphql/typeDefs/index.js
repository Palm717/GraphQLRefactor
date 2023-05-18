const { gql } = require("apollo-server-express");

const userType = require("./userType");
const bookType = require("./bookType");
const queryType = require("./queryType");
const mutationType = require("./mutationType");

const typeDefs = gql`
  ${userType}
  ${bookType}
  ${queryType}
  ${mutationType}
`;

module.exports = typeDefs;
