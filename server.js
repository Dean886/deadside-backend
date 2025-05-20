const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes/apiRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
app.use(express.json());

// Health Check (direct root-level route)
app.get("/health", (req, res) => res.json({ status: "✅ Server running" }));

// API Routes
app.use("/api", routes);

// Root test
app.get("/", (req, res) => res.send("✅ Deadside API root alive"));

app.listen(PORT, () => {
  console.log(`🧠 API live on port ${PORT}`);
});
