
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.use(cors());
app.use(express.json());

export default app;