const { gql } = require('apollo-server')

const query = gql `
  type Query {
    characters: [Character]
    character(id: ID!): Character!
  }
`

module.exports = query