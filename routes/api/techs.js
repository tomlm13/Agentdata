
const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const routes = express.Router();

//This will help us connect to the database
const dbo = require("../../config/db");

routes.get('/test', (req, res) => res.send('tech route testing!'));

// This section will help you get a list of all the records.
routes.route("/techs").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  db_connect
    .collection("techs")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you create a new record.
routes.route("/techs").post(function (req, res) {
  let db_connect = dbo.getDb("employees");
  let myobj = {
    name: req.body.name,
    title: req.body.title
  };
  db_connect.collection("records").insertOne(myobj, function (err, res) {
    if (err) throw err;
  });
});

module.exports = routes;
