const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.

const authRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This helps convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

const UserModel = require("../models/user")
 
// This section will help you create a new record.
// This section will help you create a new record.

authRoutes.route("/register").post(function (req, response) {

    let db_connect = dbo.getDb();
    console.log(req)
    let myobj = {
      name: req.body.name,
      position: req.body.email,
      level: req.body.password,
    };
    db_connect.collection("Users").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });

});

authRoutes.route("/profile").get(async function (req, response) {
    let db_connect = dbo.getDb("EverMemories");
  
    UserModel.find()
    .then(data => res.json(data))
    .catch(err => res.status(404).json())
});

   

   module.exports = authRoutes;

