const mongoose = require("../db/mongoose");
const Task = require("../models/Task");

Task.findByIdAndDelete("61729d2451834344dba448da")
  .then((result) => {
    console.log(result);
    return Task.countDocuments({ completedStatus: false });
  })
  .then((count) => {
    console.log("UnCompleted Tasks: ", count);
  })
  .catch((e) => {
    console.log(e);
  });
