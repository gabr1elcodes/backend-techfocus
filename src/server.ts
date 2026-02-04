import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import routes from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3333;

connectDB();

app.use(cors({
  origin: "https://tech-focus-eight.vercel.app",
  credentials: false,
}));

app.use(express.json());

app.use("/", routes);

app.get("/", (_, res) => {
  res.send("API TechFocus rodando 🚀");
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
