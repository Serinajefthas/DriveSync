const express = require("express");
const multer = require("multer");
const carsControllers = require("../controllers/car.controllers");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets/cars");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, callback) => {
  const imageType = file.mimetype.split("/")[0];

  if (imageType === "image") {
    return callback(null, true);
  } else {
    return callback(new Error("Must be a valid image"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
});

const router = express.Router();

// Get all cars
router.route("/").get(carsControllers.getAllCars);

// Get a car by id
router.route("/:carId").get(carsControllers.getCarById);

// Add a car
router.route("/").post(upload.single("image"), carsControllers.addCar);

// Update a car
router.route("/:carId").patch(carsControllers.updateCar);

module.exports = router;
