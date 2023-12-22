const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

require("dotenv").config();

const mongoose = require("mongoose");

const carRouter = require("./routes/car.route");
const clientRouter = require("./routes/client.route");

app.use(cors());

app.use(express.json());

app.use("/assets", express.static(path.join(__dirname, "assets")));

mongoose
  .connect(
    `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.h3qz8ag.mongodb.net/carRentalDB?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connected successfully to MongoDB"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Cars routes
app.use("/api/cars", carRouter);

// Clients routes
app.use("/api/clients", clientRouter);

app.all("*", (req, res, next) => {
  res.json({
    message: "Page not found",
    code: 404,
  });
});

app.listen(4000 || 5500, () => {
  console.log("Listening on port 4000 || 5500");
});
