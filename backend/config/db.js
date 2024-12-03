// backend/config/db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();  // Make sure environment variables are loaded

const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/food", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));
};

export { connectDB };
