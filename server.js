require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const productRoutes = require("./src/routes/product.routes");

const app = express();
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
      console.log("MongoDB connected")
  })
  .catch(err => {
      console.log(err)
  });

app.use("/api/products", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
