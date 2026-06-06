import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ENV } from "./utils/env.js";
import authRoutes from "../src/routes/auth.routes.js";
import rfqRoutes from "../src/routes/rfq.routes.js";
import vendorRoutes from "../src/routes/vendor.routes.js";

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
app.use("/api/rfq",rfqRoutes);
app.use("/api/vendor",vendorRoutes);

export default app;
