const mongoose = require("../db/mongoose");
const Task = require("../models/Task");
const User = require("../models/User");

// Task.findByIdAndDelete("61729d2451834344dba448da")
//   .then((result) => {
//     console.log(result);
//     return Task.countDocuments({ completedStatus: false });
//   })
//   .then((count) => {
//     console.log("UnCompleted Tasks: ", count);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const deleteTask = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completedStatus: false });
  return count;
};

deleteTaskAndCount("61732d021997be00fa25d2bc")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
