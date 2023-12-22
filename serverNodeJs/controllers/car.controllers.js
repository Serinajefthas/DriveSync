const Car = require("../models/car.model");

// Get all cars
const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get a car by id
const getCarById = async (req, res) => {
  try {
    const { carId } = req.params;
    const car = await Car.findById(carId);
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Add a car
const addCar = async (req, res) => {
  try {
    const { name, model, year, rent_per_day, specifications } = req.body;

    const parsedSpecifications = JSON.parse(specifications);

    const { number_of_doors, number_of_people, transmission, number_of_bags } =
      parsedSpecifications;

    const image = req.file.filename;
    console.log(image);

    const newCar = new Car({
      name,
      model,
      year,
      rent_per_day,
      image,
      specifications: {
        number_of_doors,
        number_of_people,
        transmission,
        number_of_bags,
      },
    });

    const savedCar = await newCar.save();
    res.status(201).json(savedCar);
  } catch (error) {
    console.error(error);

    if (error.name === "ValidationError") {
      // Handle Mongoose validation error
      const errors = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ error: errors });
    }

    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update a car
const updateCar = async (req, res) => {
  try {
    const { carId } = req.params;
    const { model } = req.body;

    // Build the updatedCar object dynamically
    const updatedCar = {};

    if (model) updatedCar.model = model;

    const car = await Car.findByIdAndUpdate(carId, updatedCar, { new: true });

    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

    res.status(200).json(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = { addCar, getAllCars, getCarById, updateCar };
