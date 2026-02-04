import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error("MONGO_URI não definida");
    }

    await mongoose.connect(mongoUri);
    console.log("✅ MongoDB conectado");
  } catch (error) {
    console.error("❌ Erro ao conectar no MongoDB:", error);
    process.exit(1);
  }
};
