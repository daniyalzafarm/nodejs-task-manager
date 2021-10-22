const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  // useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive Number");
      }
    },
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email!");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minminLength: 7,
    validate(value) {
      if (value.includes("password")) {
        throw new Error("Password could not contain password string");
      }
    },
  },
});

// const me = new User({
//   name: "     Daniyal Zafar     ",
//   email: "DANIYAL@GMAIL.COM      ",
//   age: 20,
//   password: "daniyal",
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
    required: true,
    trim: true,
  },
  completedStatus: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", taskSchema);

const task1 = new Task({
  description: "       Validation Task in Task module       ",
});

task1
  .save()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
