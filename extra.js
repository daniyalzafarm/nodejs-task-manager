// ---- Creating Your Own Id ----
// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());

// ----- Insert Single User in Database -----
// db.collection("users").insertOne(
//   {
//     name: "Huzaifa Zafar",
//     age: 15,
//   },
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert user");
//     }
//     console.log(result.insertedId);
//   }
// );

// ----- Insert Multiple Users in Database -----
// db.collection("users").insertMany(
//   [
//     {
//       name: "Muneeb Ahmad",
//       age: 20,
//     },
//     {
//       name: "Ahmad Khan",
//       age: 20,
//     },
//   ],
//   {
//     ordered: false,
//   },
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert user");
//     }
//     console.log(result.insertedIds);
//   }
// );

// ----- Insert Multiple Tasks in Database -----
// db.collection("tasks").insertMany(
//   [
//     {
//       description: "Learn CC Theory Topics",
//       completedStatus: true,
//     },
//     {
//       description: "Learn CC Lab Topics",
//       completedStatus: false,
//     },
//     {
//       description: "Start MongoDB Tutorials",
//       completedStatus: true,
//     },
//   ],
//   {
//     ordered: false,
//   },
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert tasks");
//     }
//     console.log("Acknowledged: ", result.acknowledged);
//     console.log("Total Entries: ", result.insertedCount);
//     console.log(result.insertedIds);
//   }
// );

// ---- Read From Database ----
// db.collection("tasks").findOne(
//   { _id: new ObjectID("617054cf8b7052e22b11452a") },
//   (error, task) => {
//     if (error) {
//       return console.log("Unable to Find!");
//     }
//     console.log("Last Task added to the Database: ", task);
//   }
// );

// db.collection("tasks")
//   .find({ completedStatus: true })
//   .toArray((error, tasks) => {
//     if (error) {
//       return console.log("Unable to Find!");
//     }
//     console.log(tasks);
//   });

// ---- Update Database ----
// db.collection("users")
//   .updateOne(
//     {
//       _id: new ObjectID("6170520d9dffa36916fe6c3e"),
//     },
//     {
//       $set: {
//         name: "Hafiz Huzaifa",
//       },
//       $inc: {
//         age: 1,
//       },
//     }
//   )
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// db.collection("tasks")
//   .updateMany(
//     {
//       completedStatus: false,
//     },
//     {
//       $set: {
//         completedStatus: true,
//       },
//     }
//   )
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
