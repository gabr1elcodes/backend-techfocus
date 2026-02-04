import { Request, Response } from "express";
import User from "../models/User";
import { generateToken } from "../utils/jwt";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email e senha são obrigatórios" });
    }

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email já cadastrado" });
    }

    const user = await User.create({ email, password, name });

    const token = generateToken(user.id);

    return res.status(201).json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error: any) {
    console.error("ERRO REGISTER:", error);
    return res.status(500).json({
      message: "Erro interno no servidor",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email ou senha inválidos" });
    }

    const match = await user.comparePassword(password);
    if (!match) {
      return res.status(400).json({ message: "Email ou senha inválidos" });
    }

    const token = generateToken(user.id);

    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Erro interno no servidor" });
  }
};
