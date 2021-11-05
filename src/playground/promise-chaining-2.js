const mongoose = require("../db/mongoose");
const Task = require("../models/Task");
const User = require("../models/User");

/*
note: 

-- Promise chaning is used when we need to Re-Process response of fisrt promise.

-- To Use promise chaining, return the second promise in then() of first promise And agai Use then() to process the second Promise, After handaling all promises use a single cath Statement to Handle errors.

*/

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

/*
note: 

-- async function always return a promise( having the returned Value ).
-- after creating the funtion, we use it as a Promise and process then() & catch() block.
-- async function allow us to access all values in a single scope.
-- we use and await promise returning funtions in async funtion.

*/
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
