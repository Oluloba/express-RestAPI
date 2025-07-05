const express = require('express');
const router = express.Router();
const store = require('../data/store');

// GET /items
router.get('/', (req, res) => {
  res.json(store.getAll());
});

// GET /items/:id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = store.getById(id);
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
});

// POST /items
router.post('/', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }
  const newItem = store.create(name, description);
  res.status(201).json(newItem);
});

// PUT /items/:id
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }
  const updatedItem = store.update(id, name, description);
  if (!updatedItem) return res.status(404).json({ error: 'Item not found' });
  res.json(updatedItem);
});

// DELETE /items/:id
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const deletedItem = store.delete(id);
  if (!deletedItem) return res.status(404).json({ error: 'Item not found' });
  res.json({ message: 'Item deleted successfully' });
});

module.exports = router;
