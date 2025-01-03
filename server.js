require("dotenv").config();
const express = require("express");
const sequelize = require("./models");
const userRoutes = require("./routes/userRoutes");
const penghasilanRoutes = require("./routes/penghasilanRoutes");
const modalRoutes = require("./routes/modalRoutes");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

// Middleware
app.use(express.json());

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Routes
// app.use("/api", userRoutes);
app.use("/api/penghasilan", penghasilanRoutes);
app.use("/api/modal", modalRoutes);
app.use ("/api/user", userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
