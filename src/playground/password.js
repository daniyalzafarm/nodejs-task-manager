const bcrypt = require("bcryptjs");

const func = async () => {
  const password = "Daniyal";
  const hashPassword = await bcrypt.hash(password, 8);

  console.log(password);
  console.log(hashPassword);

  const isMatch = await bcrypt.compare("Daniyal", hashPassword);
  console.log(isMatch);
};
func();
