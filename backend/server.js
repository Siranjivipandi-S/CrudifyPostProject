const express = require("express");
require("dotenv").config();
const connection = require("./config/databaseConfig.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const router = require("./routes/routespost.js");
const app = express();
const PORT = process.env.PORT || 5001;
connection();
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
app.get("/", (req, res) => {
  res.render("Express Started");
});
app.listen(PORT, () => {
  console.log(`Server Connect on Port: ${PORT}`);
});
