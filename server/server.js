const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const path = require("path");
require("dotenv").config({ path: "./.env" });

const cors = require("cors");
app.use(require("./routes/record"));

// Get MongoDB driver connection
const dbo = require("./db/conn");
const { typeDefs, resolvers } = require("./schemas");

const port = process.env.PORT || 5000;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(cors());

app.use(express.json());

app.listen(port, () => {
  // Perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
