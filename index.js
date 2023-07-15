const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./auth.js");
const usersRoutes = require("./users.js");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
