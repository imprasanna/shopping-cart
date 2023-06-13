const express = require("express");
const mongoose = require("mongoose");
const { userRoutes } = require("./routes/register");
// const bodyParser = require("body-parser");

// const cors = require("cors");

const app = express();

require("dotenv").config();

app.use(express.json());
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// // parse application/json
// app.use(bodyParser.json());

const products = require("./products");
const { loginRoutes } = require("./routes/login");
const port = 5000;
const uri = process.env.DB_URI;

// Database connection
main()
  .then(() => console.log("Connected to database!"))
  .catch((err) => console.log("Database connection failed : ", err.message));

app.get("/", (req, res) => {
  res.send("Online shop API running!");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

userRoutes(app);
loginRoutes(app);

async function main() {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true, //for avoiding some deprecation errors
  });
}
