const Client = require("../models/client.model");

// Get all clients
const getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get a client by id
const getClientById = async (req, res) => {
  try {
    const { clientId } = req.params;
    const client = await Client.findById(clientId);
    if (!client) {
      return res.status(404).json({ error: "Client not found" });
    }
    res.json(client);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Add a client
const addClient = async (req, res) => {
  try {
    const {
      name,
      lastName,
      email,
      phone,
      birthday,
      country,
      pickupDate,
      returnDate,
      additionalOptions,
    } = req.body;

    const newClient = new Client({
      name,
      lastName,
      email,
      phone,
      birthday,
      country,
      pickupDate,
      returnDate,
      additionalOptions,
    });

    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { addClient, getAllClients, getClientById };
