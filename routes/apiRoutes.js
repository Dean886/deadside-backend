const express = require("express");
const router = express.Router();
const { login } = require("../controllers/authController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/login", login);
router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: `🔐 Authorized access granted`, user: req.user });
});

module.exports = router;
