import Food from "../models/foodModel.js";

// Add food item
export const addFood = async (req, res) => {
  const { description, price, category } = req.body;

  try {
    const food = new Food({ description, price, category });
    await food.save();
    res.status(201).json({ success: true, message: "Food item added", food });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error adding food item", error: error.message });
  }
};

// Fetch all food items
export const getFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
