const jwt = require("jsonwebtoken");

const myFunction = () => {
  const token = jwt.sign({ _id: "myid" }, "thisissecretstring", {
    expiresIn: "7 days",
  });
  console.log(token);

  const data = jwt.verify(token, "thisissecretstring");
  console.log(data);
};
myFunction();
