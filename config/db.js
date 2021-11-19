const { MongoClient } = require("mongodb");
const Db = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db1;
var _db2

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db1 = db.db("Techs");
        _db2 = db.db("Test");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
         });
  },

  getDb: function () {
    return _db1;
  },
  getDbTwo: function () {
    return _db2;
  },
};
