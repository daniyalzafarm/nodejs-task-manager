const mongoose = require("../db/mongoose");
const User = require("../models/User");

// User.findByIdAndUpdate("6173273cce1ae81441ed5828", { age: 22 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 22 });
//   })
//   .then((count) => {
//     console.log(count);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("6173273cce1ae81441ed5828", 21)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
