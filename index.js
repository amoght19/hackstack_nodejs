const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const dotenv = require("dotenv");

const DB = require("./database/database");
const rootRouter = require("./routes/rootRoutes");
const orderRouter = require("./routes/order");
const userRouter = require("./routes/user");

dotenv.config();
DB();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use("/", rootRouter);
app.use("/order", orderRouter);
app.use("/user", userRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT || 3000}`);
});
