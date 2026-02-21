import express from "express";
import { config } from "dotenv";
import { connectDB, disconnectDB } from "./config/DB.js";
import moviesRoutes from "./routes/movieRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import watchlistRoutes from "./routes/watchlistRoutes.js";

config();

connectDB();

const app = express();

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 👉 Root route (for Railway / recruiters)
app.get("/", (req, res) => {
  res.json({
    message: "🎬 Movie Explorer Backend API is running 🚀",
    endpoints: {
      movies: "/movies",
      auth: "/auth",
      watchlist: "/watchlist"
    }
  });
});

// 👉 Health check route
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// API ROUTES
app.use("/movies", moviesRoutes);
app.use("/auth", authRoutes);
app.use("/watchlist", watchlistRoutes);

const port = process.env.PORT || 5001;

const Server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Graceful shutdown & error handling
process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Rejection: ${err.message}`, err);
  Server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  console.error(`Uncaught Exception: ${err.message}`, err);
  Server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.error(`SIGTERM received, shutting down server`);
  Server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});
