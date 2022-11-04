const { ApolloServer } = require('apollo-server')
const characterSchema = require('./user/schema/character.graphql')
const characterResolvers = require('./user/resolvers/characterResolvers')
const CharacterAPI = require('./user/datasource/character')

const typeDefs = [characterSchema]
const resolvers = [characterResolvers]

const server = new ApolloServer( { 
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      usersAPI: new CharacterAPI()
    }
  }
} )

server.listen().then(({url}) => {
  console.log(`Servidor rodando na porta ${url}`)
})