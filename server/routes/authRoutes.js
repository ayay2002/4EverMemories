const express = require("express");
const User = require("../models/user");
const { signToken } = require("../utils/auth.js");

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

authRoutes.route("/register").post(async function (req, res) {
console.log('hello');
  const user = await User.create({ username, email, password });
  const token = signToken(user);
  res.json(token, user);
});

// authRoutes.route("/profile").get(function (req, res) {
//   let db_connect = dbo.getDb();
//   let myquery = { _id: ObjectId(req.params.id) };
//   db_connect
//     .collection("Users")
//     .findOne(myquery, function (err, result) {
//       if (err) throw err;
//       res.json(result);
//     });
// });


module.exports = authRoutes;

