const mongoose = require("../db/mongoose");
const User = require("../models/User");

/*
note: 

-- Promise chaning is used when we need to Re-Process response of fisrt promise.

-- To Use promise chaining, return the second promise in then() of first promise And agai Use then() to process the second Promise, After handaling all promises use a single cath Statement to Handle errors.

*/

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

/*
note: 

-- async function always return a promise( having the returned Value ).
-- after creating the funtion, we use it as a Promise and process then() & catch() block.
-- async function allow us to access all values in a single scope.
-- we use and await promise returning funtions in async funtion.

*/
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
