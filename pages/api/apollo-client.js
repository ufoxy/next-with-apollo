// ./apollo-client.js

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import characterSchema from './character/schema/character.js';
import characterResolvers from './character/resolvers/characterResolvers.js';
import CharactersAPI from './character/datasource/character.js';

const typeDefs = [characterSchema]
const resolvers = [characterResolvers]

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      CharactersAPI: new CharactersAPI()
    }
  }
});

async function ss() {
  return startStandaloneServer(server, {
    listen: { port: 4000 },
  });
}

ss().then((e) =>
  console.log(`🚀  Apollo Server ready at: ${e.url}`)
);
