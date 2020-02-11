const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load env Vars
dotenv.config({ path: "./config/config.env" });

const app = express();

//Body parser
app.use(express.json());

// Connect database
connectDB();

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Welcome to IT Logger API..." });
});

// Define Routes
app.use("/api/techs", require("./routes/techs"));
app.use("/api/logs", require("./routes/logs"));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
