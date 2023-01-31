require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./model/products");
const data = require("./products.json");
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Product.deleteMany();
    await Product.create(data);
  } catch (error) {
    console.log("Error");
  }
};

start();
