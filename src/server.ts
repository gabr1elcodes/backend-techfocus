import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import routes from "./routes";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3333;

app.use(cors({
  origin: ["https://tech-focus-eight.vercel.app", "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

connectDB();

app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});