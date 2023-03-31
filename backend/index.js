const express = require("express");
const mongoose = require("mongoose");
const { userRoutes } = require("./routes/register");

// const cors = require("cors");

const app = express();

require("dotenv").config();

app.use(express.json());
// app.use(cors());

const products = require("./products");
const port = 3000 || process.env.PORT;
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

async function main() {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true, //for avoiding some deprecation errors
  });
}
