const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const dbName = require("../config").dbName;
const dbUrl = require("../config").dbUrl;

let _db;

console.log(dbName, dbUrl);

const mongoConnect = callback => {
  MongoClient.connect(dbUrl)
    .then(client => {
      console.log("Connected");
      _db = client.db(dbName);
      callback();
    })
    .catch(err => {
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw new Error("No database found");
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
