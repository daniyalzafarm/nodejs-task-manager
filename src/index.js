const express = require("express");
require("./db/mongoose");
const Task = require("./models/Task");
const userRouter = require("./routers/userR");
const taskRouter = require("./routers/taskR");
const User = require("./models/User");

const app = express();
const port = process.env.port || 3000;

// Middlewares

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET methods are disabled");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("Soory! this site is under maintenance");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// Run Express Server
app.listen(port, () => {
  console.log("Server is up on", port);
});
