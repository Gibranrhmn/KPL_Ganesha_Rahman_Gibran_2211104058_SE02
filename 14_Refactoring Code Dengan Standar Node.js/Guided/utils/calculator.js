/**
 * Menghitung total harga dari array
 * @param {number[]} prices - Array harga
 * @returns {number} Total harga
 */
function calculateTotalPrice(prices) {
  // Menjumlahkan semua elemen array
  return prices.reduce((sum, price) => sum + price, 0);
}

module.exports = { calculateTotalPrice };
