import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// -----------------------------
// MIDDLEWARE
// -----------------------------

app.use(helmet());

// CORS
app.use(
  cors({
    origin: true, // Allow all origins for development
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -----------------------------
// HEALTH CHECK
// -----------------------------

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "Durga Earthmovers API",
  });
});

// -----------------------------
// CONTACT ROUTE
// -----------------------------

app.use("/api", contactRoutes);

// -----------------------------
// ERROR HANDLER
// -----------------------------

app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err);

  res.status(500).json({
    success: false,
    message: "Internal server error.",
  });
});

// -----------------------------
// MONGODB + SERVER
// -----------------------------

const startServer = async () => {
  try {
    // Start server immediately, MongoDB connection optional
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

    // Try to connect to MongoDB if configured
    if (process.env.MONGO_URI) {
      try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
      } catch (dbError) {
        console.log("MongoDB connection failed, server running without database:", dbError.message);
      }
    } else {
      console.log("MongoDB URI not configured, server will run without database");
    }
  } catch (error) {
    console.error("Server startup error:", error);
    process.exit(1);
  }
};

startServer();