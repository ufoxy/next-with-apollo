require("dotenv").config();
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./character/typeDefs/index");
const resolvers = require("./character/resolvers/characterResolvers");

// Database
const db = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  name: process.env.DB_NAME,
};

const dbUri = `mongodb+srv://${db.user}:${db.pass}@${db.name}.w6iobix.mongodb.net/?retryWrites=true&w=majority`;
// const dbOptions = {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
// };

mongoose
   .connect(dbUri)
   .then(() => console.log("Database connected"))
   .catch((error) => console.log("Databased failed: ", error));

// GraphQL
const server = new ApolloServer({ typeDefs, resolvers });
server
   .listen()
   .then(({ url }) => console.log(`Server ready at ${url}`))
   .catch((error) => console.log("Server failed: ", error));