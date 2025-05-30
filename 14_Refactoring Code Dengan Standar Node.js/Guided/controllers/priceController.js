// Mengimpor fungsi kalkulasi dari utility
const { calculateTotalPrice } = require("../utils/calculator");

/**
 * Menghandle permintaan POST untuk menghitung total harga
 * @param {Request} req - Objek request dari Express
 * @param {Response} res - Objek response dari Express
 */
function handlePriceCalculation(req, res) {
  const { prices } = req.body; // Mengambil array harga dari body request

  // Validasi bahwa input berupa array
  if (!Array.isArray(prices)) {
    return res.status(400).json({ message: "Input harus berupa array harga." });
  }

  // Hitung total harga menggunakan fungsi utilitas
  const total = calculateTotalPrice(prices);

  // Kirim respons JSON
  return res.json({ totalPrice: total });
}

module.exports = { handlePriceCalculation };
