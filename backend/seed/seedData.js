import mongoose from "mongoose";
import Food from "../models/foodModel.js";
import { food_list } from "../data/foodData.js";
import connectDB from "../config/db.js";

const seedData = async () => {
  try {
    await connectDB();
    await Food.deleteMany();
    console.log("Existing food data cleared.");
    await Food.insertMany(food_list);
    console.log("Seed data inserted successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedData();
