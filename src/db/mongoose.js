const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  // useCreateIndex: true,
});

// const task1 = new Task({
//   description: "       Validation Task in Task module       ",
// });

// task1
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
