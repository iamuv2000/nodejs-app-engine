// * Imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

// * App configuration
const app = express();
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  console.log("[info] : Logging output...");
  res.status(200).json({
    msg: "🚀 Nodejs - App Engine is Online 🚀",
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
