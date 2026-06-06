import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ENV } from "./utils/env.js";
import authRoutes from "../src/routes/auth.routes.js";
const app = express();
const CLIENT_URL = ENV.CLIENT_URL;
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: CLIENT_URL || "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api/auth",authRoutes);

export default app;
