const express = require("express");
const router = express.Router();

// localhost:3000/api
router.get("/", (req, res) => {
  res.status(200).json({
    message: "GET to API",
    metadata: { hostname: req.hostname, method: req.method },
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
});
module.exports = router;
