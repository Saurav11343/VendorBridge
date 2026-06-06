import express from "express";
import { ENV } from "./utils/env.js";
import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = ENV.PORT;

connectDB();

app.listen(PORT, (req, res) => {
  console.log("Server is running on port : ", PORT);
});
