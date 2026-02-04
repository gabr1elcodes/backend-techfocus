import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error("A variável MONGO_URI não está definida no arquivo .env");
    }

    const conn = await mongoose.connect(mongoUri);

    console.log(`✅ MongoDB Conectado: ${conn.connection.host}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`❌ Erro de conexão: ${error.message}`);
    } else {
      console.error("❌ Erro desconhecido ao conectar ao MongoDB");
    }

    process.exit(1);
  }
};