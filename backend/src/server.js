import express from "express";
import { ENV } from "./utils/env.js";
import app from "./app.js";

const PORT = ENV.PORT;

app.listen(PORT, (req, res) => {
  console.log("Server is running on port : ", PORT);
});
