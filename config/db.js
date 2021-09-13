const { MongoClient } = require("mongodb");
const Db = 'mongodb+srv://tomlm13:Paintball1@cluster0.zz9p8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("myFirstDatabase");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
         });
  },

  getDb: function () {
    return _db;
  },
};
