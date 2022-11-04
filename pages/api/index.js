const { ApolloServer } = require('apollo-server')
const characterSchema = require('./character/schema/character.graphql')
const characterResolvers = require('./character/resolvers/characterResolvers')
const CharacterAPI = require('./character/datasource/character')

const typeDefs = [characterSchema]
const resolvers = [characterResolvers]

const server = new ApolloServer( { 
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      CharactersAPI: new CharacterAPI()
    }
  }
} )

server.listen().then(({url}) => {
  console.log(`Servidor rodando na porta ${url}`)
})