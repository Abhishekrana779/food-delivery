import mongoose from "mongoose";
import dotenv from "dotenv";
import axios from "axios";
import Meal from "./models/Meal.js";
import Deal from "./models/Deal.js";

dotenv.config();

const THEMEALDB_URL = "https://www.themealdb.com/api/json/v1/1";

const mapMeal = (m) => ({
  externalMealId: m.idMeal,
  name: m.strMeal,
  category: m.strCategory || "",
  area: m.strArea || "",
  image: m.strMealThumb || "",
  instructions: m.strInstructions || "",
  youtubeUrl: m.strYoutube || "",
  ingredients: Array.from({ length: 20 }, (_, i) => ({
    ingredient: m[`strIngredient${i + 1}`] || "",
    measure: m[`strMeasure${i + 1}`] || "",
  })).filter((x) => x.ingredient),
  price: 450,
  isAvailable: true,
  isFeatured: false,
  discount: 0,
  rating: 4.5,
});

const seedDeals = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const mealCount = await Meal.countDocuments();
    if (mealCount === 0) {
      console.log("No meals found. Fetching meals from TheMealDB...");
      const { data } = await axios.get(`${THEMEALDB_URL}/search.php?s=`);
      const rawMeals = data?.meals || [];
      if (rawMeals.length === 0) {
        console.log("No meals fetched from TheMealDB.");
        await mongoose.disconnect();
        return;
      }
      const mapped = rawMeals.slice(0, 8).map(mapMeal);
      await Meal.insertMany(mapped);
      console.log(`Seeded ${mapped.length} meals.`);
    } else {
      console.log(`Meals already seeded (${mealCount} found).`);
    }

    const dealCount = await Deal.countDocuments();
    if (dealCount > 0) {
      console.log(`Deals already seeded (${dealCount} found). Skipping.`);
      await mongoose.disconnect();
      return;
    }

    const meals = await Meal.find().limit(6);
    if (meals.length === 0) {
      console.log("No meals available to create deals.");
      await mongoose.disconnect();
      return;
    }

    const now = new Date();
    const deals = meals.map((meal, idx) => {
      const originalPrice = meal.price || 450;
      const discountPercentage = [20, 30, 25, 40, 15, 35][idx] || 20;
      const dealPrice = Math.round(originalPrice * (1 - discountPercentage / 100));
      const startDate = new Date(now);
      const endDate = new Date(now.getTime() + (2 + idx) * 24 * 60 * 60 * 1000);

      return {
        title: `${discountPercentage}% OFF ${meal.name}`,
        description: `Limited-time deal on ${meal.name}. Grab it before it ends!`,
        meal: meal._id,
        discountPercentage,
        originalPrice,
        dealPrice,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        isActive: true,
        maxClaims: 50,
        claimedCount: 0,
        image: meal.image || "",
        badge: ["Hot Deal", "Super Saver", "Limited Time", "Best Seller", "Flash Sale", "Chef's Pick"][idx] || "Hot Deal",
      };
    });

    await Deal.insertMany(deals);
    console.log(`Seeded ${deals.length} deals successfully.`);
    await mongoose.disconnect();
  } catch (err) {
    console.error("Seeding failed:", err.message);
    process.exit(1);
  }
};

seedDeals();
