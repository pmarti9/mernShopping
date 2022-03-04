const express = require("express");
const router = express.Router();

//item model
const Item = require("../../models/Item");

// Get API/Items
// get all items
// Public

router.get("/", (req, res) => {
  Item.find()
    .sort({ Date: -1 })
    .then((items) => res.json(items));
});

// POST API/Items
//create an item
// Public

router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });
  newItem.save().then((item) => res.json(item));
});

// Get API/Items
// Delete item
// Public

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
