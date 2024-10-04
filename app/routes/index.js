const express = require("express");
const router = express.Router();

const dataStore = [];
const iDStore = [];
// localhost:3000/api/anything that follows "/" is the id
router.get("/", (req, res) => {
  try {
    res.status(200).json({
      message: "GET to API",
      data: dataStore,
      acutatorMessage: "Service is up",
      metadata: { hostname: req.hostname, method: req.method },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// localhost:3000/api/:id
router.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    console.log("Data Store:", dataStore);
    console.log("ID:", id);
    const data = dataStore.find((item) => item.id === parseInt(id));
    if (!id) {
      res.status(400).json({ message: "Bad Request" });
      return;
    }
    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// localhost:3000/api
router.post("/", (req, res) => {
  const { id, data } = req.body;
  if (!id || !data) {
    res.status(400).json({ message: "Bad Request" });
    return;
  }
  dataStore.push({ id, data });
  res.status(200).json({
    message: "POST to API",
    acutatorMessage: "Service is up",
    id,
    data,
    metadata: { hostname: req.hostname, method: req.method },
  });
});

// localhost:3000/api/:id
router.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    const index = dataStore.findIndex((item) => item.id === parseInt(id));
    if (index === -1) {
      res.status(404).json({ message: "Not Found" });
      return;
    }
    dataStore[index].data = data;
    res.status(200).json({
      message: "PUT to API",
      acutatorMessage: "Service is up",
      id,
      data,
      metadata: { hostname: req.hostname, method: req.method },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// localhost:3000/api/:id
router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const index = dataStore.findIndex((item) => item.id === parseInt(id));
    if (index === -1) {
      res.status(404).json({ message: "Not Found" });
      return;
    }
    dataStore.splice(index, 1);
    res.status(200).json({
      message: "DELETE to API",
      acutatorMessage: "Service is up",
      id,
      metadata: { hostname: req.hostname, method: req.method },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
module.exports = router;
