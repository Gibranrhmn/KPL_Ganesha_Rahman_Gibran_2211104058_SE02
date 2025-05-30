// Mengimpor framework Express
const express = require("express");

// Mengimpor route harga
const priceRoutes = require("./routes/priceRoutes");

const app = express();
const PORT = 3000;

// Middleware untuk membaca JSON dari request body
app.use(express.json());

// Menggunakan route khusus untuk kalkulasi harga
app.use("/api/price", priceRoutes);

// Menjalankan server di port 3000
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
