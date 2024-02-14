// const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let _db;

module.exports = {
  connectToServer: async function (callback) {

    try {
      await client.connect();
    } catch (e) {
      console.error(e);
    }

    _db = client.db("employees");

    return (_db === undefined ? false : true);
  },
  getDb: function () {
    return _db;
  },
};

// const client = new MongoClient(Db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// var _db;

// module.exports = {
//   connectToServer: function (callback) {
//     client.connect(function (err, db) {
//       // Verify we got a good "db" object
//       if (db)
//       {
//         _db = db.db("Database");
//         console.log("Successfully connected to MongoDB.");
//       }
//       return callback(err);
//          });
//   },

//   getDb: function () {
//     return _db;
//   },
// };
const mongoose = require("mongoose");

mongoose.connect(
  // process.env.ATLAS_URI || "mongodb://127.0.0.1:27017/googlebooks"
  "mongodb://127.0.0.1:27017/testquery"
);

module.exports = mongoose.connection;
