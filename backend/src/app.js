import express from "express";
import cors from "cors";

import mealRoutes from "./routes/mealRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",

  "https://food-delivery-6klnqek5i-abisheks-projects-68801856.vercel.app",

  "https://food-delivery-38tn1lx61-abisheks-projects-68801856.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("CORS blocked:", origin);
        callback(null, false);
      }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("*", cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Food Delivery API Running",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "API is working",
  });
});

app.use("/api/meals", mealRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

export default app;
