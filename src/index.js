const express = require("express");
require("./db/mongoose");
const User = require("./models/User");
const Task = require("./models/Task");

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

// Creating User
app.post("/users", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      console.log(user);
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});
// Reading all Users
app.get("/users", (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});
// Read specific User by id
app.get("/users/:id", (req, res) => {
  console.log(req.params);
  const _id = req.params.id;

  User.findById(_id)
    .then((user) => {
      //   if (!user) {
      //     res.status(404).send();
      //   }
      res.send(user);
    })
    .catch((e) => {
      res.status(404).send(e);
    });
});

// Create Task
app.post("/tasks", (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => {
      console.log(task);
      res.status(201).send(task);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});
// Read all Tasks
app.get("/tasks", (req, res) => {
  Task.find({})
    .then((tasks) => {
      res.send(tasks);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

// Read Task by Id
app.get("/tasks/:id", (req, res) => {
  const _id = req.params.id;
  Task.findById(_id)
    .then((task) => {
      if (!task) {
        res.status(404).send();
      }
      res.send(task);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

// Run Express Server
app.listen(port, () => {
  console.log("Server is up on", port);
});
