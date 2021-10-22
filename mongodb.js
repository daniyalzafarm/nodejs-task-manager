// CRUD Operations

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to the Database");
    }
    console.log("Database Connected Successfully!");

    const db = client.db(databaseName);

    // db.collection("users")
    //   .deleteMany({
    //     age: 20,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    db.collection("tasks")
      .deleteOne({
        description: "Learn CC Lab Topics",
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }
);
// Database Run Command
// /Development/NodeJs/Database/mongodb/bin/mongod.exe --dbpath=/Development/NodeJs/Database/mongodb-data
