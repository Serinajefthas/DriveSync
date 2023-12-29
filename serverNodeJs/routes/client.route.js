const express = require("express");
const clientControllers = require("../controllers/client.controllers");

const router = express.Router();

// Get all clients
router.route("/").get(clientControllers.getAllClients);

// Get a client by id
router.route("/:clientId").get(clientControllers.getClientById);

// Add a client
router.route("/").post(clientControllers.addClient);

module.exports = router;
