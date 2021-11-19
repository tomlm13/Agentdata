
const express = require("express");
const routes = express.Router();
const ObjectId = require('mongodb').ObjectId;


//This will help us connect to the database
const dbo = require("../../config/db");

routes.get('/test', (req, res) => res.send('tech route testing!'));

// Get
routes.route("/techs").get(function (req, res) {
  let db_connect = dbo.getDb("Techs");
  db_connect
    .collection("techs")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

routes.route("/techs/:id").get((req, res) => {
  let db_connect = dbo.getDb("Techs");
  let db_connectTwo = dbo.getDbTwo("Test");
  let id = req.params.id;
  db_connectTwo.collection("Test").aggregate([{$match:{"RONA":{$gt:5}}}]).toArray(function (err, test) {
    if (err) throw err;
    console.log(test);
  });
  db_connectTwo.collection("Test").find({"Agent Name":"MCGINLEY, THOMAS"}).toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
  });
  console.log(id);
  let o_id = new ObjectId(id);
  db_connect
    .collection("techs")
    .findOne({"_id":o_id}, function (err, result) {
      if (err) throw err;
      console.log("user found");
      res.json(result);
    });
});

// Create
routes.route("/techs").post(function (req, res) {
  let db_connect = dbo.getDb("Techs");
  let myobj = {
    name: req.body.name,
    title: req.body.title
  };
  db_connect.collection("techs").insertOne(myobj, function (err, res) {
    if (err) throw err;
  });
});

// Update
routes.route("/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("Techs");
  let id = req.params.id;
  console.log(id);
  let o_id = new ObjectId(id);
  let newvalues = {
    $set: {
      name: req.body.name,
      title: req.body.title
    },
  };
  db_connect
    .collection("techs")
    .updateOne({"_id":o_id}, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
    });
});

// Delete
routes.route("/:id").delete((req, res) => {
  let db_connect = dbo.getDb("Techs");
  let id = req.params.id;
  console.log(id);
  let o_id = new ObjectId(id);
  db_connect.collection("techs").deleteOne({"_id":o_id}, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
  });
});

routes.route("/techinfo/:name").get(function (req, res) {
  let db_connect = dbo.getDbTwo("Test");
  db_connect
    .collection("Test")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});


module.exports = routes;
