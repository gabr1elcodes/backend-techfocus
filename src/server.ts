import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import routes from "./routes";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3333;

connectDB();

app.use(cors({
  origin: true,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use("/", routes);
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});