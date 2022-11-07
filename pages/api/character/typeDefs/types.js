const { gql } = require('apollo-server')

const types = gql`

scalar DateTime

  type Character {
      id: ID!
      name: String!
      status: String!
      species: String!
      type: String
      gender: String!
      origin: Origin!
      location: Location!
      image: String
      episode: [String]!
      url: String
      created: DateTime
  }

  type Origin {
    name: String!
    url: String!
  }

  type Location {
    name: String!
    url: String!
  }
  
`

module.exports = types