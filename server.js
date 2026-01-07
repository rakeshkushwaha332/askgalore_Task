require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const passport = require("passport");

const app = express();
connectDB();

app.use(express.json());
app.use(passport.initialize());
require("./config/passport");

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/data", require("./routes/dataRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));
