const express = require("express");
const User = require("../models/User");
const router = new express.Router();

// Creating User
router.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }

  // user
  //   .save()
  //   .then(() => {
  //     console.log(user);
  //     res.status(201).send(user);
  //   })
  //   .catch((e) => {
  //     res.status(400).send(e);
  //   });
});

// Reading all Users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
  // User.find({})
  //   .then((users) => {
  //     res.send(users);
  //   })
  //   .catch((e) => {
  //     res.status(500).send(e);
  //   });
});

// Read specific User by id
router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
  // User.findById(_id)
  //   .then((user) => {
  //     if (!user) {
  //       res.status(404).send();
  //     }
  //     res.send(user);
  //   })
  //   .catch((e) => {
  //     res.status(500).send(e);
  //   });
});

// Update User
router.patch("/users/:id", async (req, res) => {
  // Validating Update Properties
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidUpdate = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidUpdate) {
    return res.status(404).send({ error: "Invalid Updates!" });
  }

  try {
    const user = await User.findOneAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete User
router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
