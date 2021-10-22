const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  // useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

// const me = new User({
//   name: "Daniyal Zafar",
//   age: "Mike",
// });

// me.save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  completedStatus: {
    type: Boolean,
  },
});

const Task = mongoose.model("Task", taskSchema);

const task1 = new Task({
  description: "Task 01 Add new Model",
  completedStatus: true,
});

task1
  .save()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
