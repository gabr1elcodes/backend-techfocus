import { Router } from "express";
import Product from "../models/Product";
import { protect } from "../middlewares/authMiddleware";

const router = Router();

router.use(protect);
router.get("/", async (req: any, res) => {
  try {
    const products = await Product.find({ user: req.user.id }); 
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar produtos" });
  }
});

router.post("/", async (req: any, res) => {
  try {
    const { name, price, content } = req.body;

    const product = new Product({ 
      name, 
      price, 
      content,
      user: req.user.id
    });

    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: "Erro ao criar produto" });
  }
});

export default router;