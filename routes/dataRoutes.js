const express = require("express");
const passport = require("passport");
const Data = require("../models/Data");
const router = express.Router();

/* INSERT RANDOM DATA */
router.post(
  "/insert-random",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const sample = [
      { title: "Apple", description: "Fruit", category: "Food" },
      { title: "Laptop", description: "Electronics item", category: "Tech" },
      { title: "Car", description: "Vehicle", category: "Transport" },
      { title: "Chair", description: "Furniture item", category: "Home" },
      { title: "T-Shirt", description: "Clothing item", category: "Fashion" },
      { title: "Book", description: "Reading material", category: "Education" },
      { title: "Headphones", description: "Audio device", category: "Tech" },
      { title: "Coffee", description: "Beverage", category: "Food" },
      { title: "Bicycle", description: "Two-wheeler", category: "Transport" },
      { title: "Pen", description: "Writing tool", category: "Stationery" },
    ];

    await Data.insertMany(sample);
    res.json({ message: "Random data inserted" });
  }
);

/* GLOBAL SEARCH */
router.get(
  "/search",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const q = req.query.q;

    const result = await Data.find({
      $or: [
        { title: new RegExp(q, "i") },
        { description: new RegExp(q, "i") },
        { category: new RegExp(q, "i") },
      ],
    });

    res.json(result);
  }
);

module.exports = router;
