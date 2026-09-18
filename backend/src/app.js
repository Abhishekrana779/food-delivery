import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import { config } from "./config/env.js";
import authRoutes from "./routes/authRoutes.js";
import mealRoutes from "./routes/mealRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import favoriteRoutes from "./routes/favoriteRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import dealRoutes from "./routes/dealRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

app.set("trust proxy", 1);
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(cors({ origin: config.clientUrl || "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(mongoSanitize());
app.use(cookieParser());

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100, standardHeaders: true, legacyHeaders: false });
app.use("/api/auth", limiter);

app.get("/api/health", (req, res) => res.status(200).json({ status: "ok", message: "Food Delivery API is running" }));

app.use("/api/auth", authRoutes);
app.use("/api/meals", mealRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/favorites", favoriteRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/deals", dealRoutes);

app.use("*", (req, res) => res.status(404).json({ message: "Route not found" }));
app.use(errorHandler);

export default app;
