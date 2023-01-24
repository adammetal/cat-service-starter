const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cats = require("./cat.schema");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.post("/api/cats", async (req, res) => {
  const cat = req.body;
  const saved = await cats.create(cat);
  res.json(saved);
});

app.get("/api/cats", async (req, res) => {
  const result = await cats.find();
  res.json(result);
});

const port = process.env?.PORT ?? 8080;

mongoose.connect("mongodb://adam:123@localhost:27017/cats").then(() => {
  app.listen(port, () => {
    console.log(`Server is runing on ${port}`);
  });
});
