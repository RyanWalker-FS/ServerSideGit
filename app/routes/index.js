const express = require("express");
const router = express.Router();

// localhost:3000/api/anything that follows "/" is the id
router.get("/", (req, res) => {
  res.status(200).json({
    message: "GET to API",
    acutatorMessage: "Service is up",
    metadata: { hostname: req.hostname, method: req.method },
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: "GET to API",
    acutatorMessage: "Service is up",
    id,
    metadata: { hostname: req.hostname, method: req.method },
  });
});

router.post("/", (req, res) => {
  const { data } = req.body;
  res.status(200).json({
    message: "POST to API",
    acutatorMessage: "Service is up",
    data: data,
    metadata: { hostname: req.hostname, method: req.method },
  });
});
router.put("/:id", (req, res) => {
  const { data } = req.body;
  const { id } = req.params;
  res.status(200).json({
    message: "PUT to API",
    acutatorMessage: "Service is up",
    data,
    id,
    metadata: { hostname: req.hostname, method: req.method },
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: "DELETE to API",
    acutatorMessage: "Service is up",
    id,
    metadata: { hostname: req.hostname, method: req.method },
  });
});
module.exports = router;
