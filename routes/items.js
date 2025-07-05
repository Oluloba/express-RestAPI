// routes/items.js

const express = require("express");
const router = express.Router();
const store = require("../data/store"); // Not an array — it's a data manager

const validateItem = (item) => item.name && item.description;

// GET all items
router.get("/", (req, res) => {
  res.json(store.getAll());
});

// GET one item by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = store.getById(id);
  if (!item) return res.status(404).json({ error: "Item not found" });
  res.json(item);
});

// POST new item
router.post("/", (req, res) => {
  const { name, description } = req.body;
  if (!validateItem({ name, description })) {
    return res.status(400).json({ error: "Name and description are required" });
  }
  const newItem = store.create(name, description);
  res.status(201).json(newItem);
});

// PUT update item
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description } = req.body;
  if (!validateItem({ name, description })) {
    return res.status(400).json({ error: "Name and description are required" });
  }
  const updated = store.update(id, name, description);
  if (!updated) return res.status(404).json({ error: "Item not found" });
  res.json(updated);
});

// DELETE item
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = store.delete(id);
  if (!deleted) return res.status(404).json({ error: "Item not found" });
  res.json(deleted);
});

module.exports = router;
