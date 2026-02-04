import { Request, Response } from "express";
import User from "../models/User";
import { generateToken } from "../utils/jwt";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Por favor, preencha todos os campos" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "Email já cadastrado" });
    const user = await User.create({ name, email, password });
    const token = generateToken(String(user._id));

    res.status(201).json({ 
      token, 
      user: { id: user._id, name: user.name, email: user.email } 
    });
  } catch (err: any) {
    console.error("ERRO DETALHADO NO REGISTRO:", err); 
    res.status(500).json({ message: "Erro ao registrar usuário", error: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Email ou senha inválidos" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: "Email ou senha inválidos" });

    const token = generateToken((user._id as any).toString());
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ message: "Erro ao fazer login" });
  }
};
