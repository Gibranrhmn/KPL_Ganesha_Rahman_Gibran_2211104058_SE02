// Mengimpor express
const express = require("express");

// Mengimpor controller untuk kalkulasi harga
const { handlePriceCalculation } = require("../controllers/priceController");

const router = express.Router();

// Mendefinisikan route POST /api/price/calculate
router.post("/calculate", handlePriceCalculation);

module.exports = router;
