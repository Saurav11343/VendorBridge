import express from "express";
import { connectDB } from "./config/db.js";
import { ENV } from "./utils/env.js";
import app from "./app.js";

const PORT = ENV.PORT;

connectDB();

app.listen(PORT, (req, res) => {
  console.log("Server is running on port : ", PORT);
});
