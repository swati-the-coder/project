const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const authRouter = require("./routes/auth.js");
const usersRouter = require("./routes/users.js");

const swaggerDocs = require("./swagger.js");
swaggerDocs(app);

app.use(bodyParser.json());

// Add middleware and configuration here

app.use("/auth", authRouter);
app.use("/users", usersRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
