const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes/apiRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
app.use(express.json());

// Health Check
app.get("/health", (req, res) => res.json({ status: "✅ Server running" }));

// Root check
app.get("/", (req, res) => res.send("✅ Deadside API root alive"));

// Mount API routes
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`🧠 API live on port ${PORT}`);
});
