const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes/apiRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

app.use(cors({
  origin: "*", // Replace * with frontend URL for production
  methods: ["GET", "POST"],
}));


app.get("/health", (req, res) => res.json({ status: "✅ Server running" }));
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`🧠 API live on port ${PORT}`);
});
