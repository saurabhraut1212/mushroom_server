
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import indexRoutes from "./routes/index";
import application from "./constants/application";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true, 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(application.url.base, indexRoutes);
export default app;