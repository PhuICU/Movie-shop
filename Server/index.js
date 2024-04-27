const express = require("express");
const mongoose = require("mongoose");
const adminRouter = require("./src/routes/admin");
const userRouter = require("./src/routes/user");

const cors = require("cors");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/src/assest", express.static(__dirname + "/src/assest"));

app.use("/api", adminRouter);
app.use("/api", userRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

mongoose
  .connect("mongodb://localhost:27017/db_web_movie", { family: 4 })
  .then(() => console.log("connect to database"))
  .catch((error) => console.log(error));
