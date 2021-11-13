const User = require("../models/User");

const main = async () => {
  // const task = await Task.findById("618fbb3042c2257e41dd456a").populate(
  //   "owner"
  // );
  // console.log(task);

  const user = await User.findById("618fba2ed87c937aae5c0fe2").populate(
    "tasks"
  );
  console.log(user.tasks);
};
main();
