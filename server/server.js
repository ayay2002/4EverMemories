const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
require("dotenv").config({ path: "./.env" });

const cors = require("cors");

// Get MongoDB driver connection
const dbo = require("./db/conn");
const { typeDefs, resolvers } = require("./schemas");

const PORT = process.env.PORT || 5000;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
app.use(require("./routes/record"));
app.use(require("./routes/authRoutes"));

app.use(cors());

app.use(express.json());

const newApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use("/graphql", expressMiddleware(server));
};

app.listen(PORT, () => {
  // Perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${PORT}`);
  console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
});

newApolloServer();
