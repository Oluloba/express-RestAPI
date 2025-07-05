// data/store.js

let items = [];
let idCounter = 1;

module.exports = {
  getAll: () => items,
  getById: (id) => items.find(item => item.id === id),
  create: (name, description) => {
    const newItem = { id: idCounter++, name, description };
    items.push(newItem);
    return newItem;
  },
  update: (id, name, description) => {
    const item = items.find(i => i.id === id);
    if (item) {
      item.name = name;
      item.description = description;
    }
    return item;
  },
  delete: (id) => {
    const index = items.findIndex(i => i.id === id);
    if (index !== -1) {
      return items.splice(index, 1)[0];
    }
    return null;
  }
};
