// ./apollo-client.js

const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = {}

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function ss() {
  return startStandaloneServer(server, {
    listen: { port: 4000 },
  });
}

ss().then((e) =>
  console.log(`🚀  Apollo Server ready at: ${e.url}`)
);
