import "dotenv/config";
import { Router } from "express";
import { connectDb } from "../../config/db.js";
import User from "./model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = Router();
const bcryptSalt = bcrypt.genSaltSync();
const { JWT_SECRET_KEY } = process.env;

router.get("/", async (req, res) => {
  connectDb();
  try {
    const userDoc = await User.find();
    res.json(userDoc);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get para recuperar o token da sessão
router.get("/profile", async (req, res) => {
  const { token } = req.cookies;

  if (token) {
    try {
      const userInfo = jwt.verify(token, JWT_SECRET_KEY);

      res.json(userInfo);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.json(null);
  }
});

//Post
router.post("/", async (req, res) => {
  connectDb();

  const { name, email, password } = req.body;
  const encryptedPassword = bcrypt.hashSync(password, bcryptSalt);

  try {
    const newUserDoc = await User.create({
      name,
      email,
      password: encryptedPassword,
    });

    const { _id } = newUserDoc;
    const newUserObj = { name, email, _id };
    const token = jwt.sign(newUserObj, JWT_SECRET_KEY);

    res.cookie("token", token).json(newUserObj);

  } catch (error) {
    res.status(500).json(error);
  }
});

//PostLogin
router.post("/login", async (req, res) => {
  connectDb();

  const { email, password } = req.body;

  try {
    const userDoc = await User.findOne({ email });

    if (userDoc) {
      const passwordCorrect = bcrypt.compareSync(password, userDoc.password);

      const { name, _id } = userDoc; //Desestruturando para retornar só essa infomações

      if (passwordCorrect) {
        const newUserObj = { name, email, _id };
        const token = jwt.sign(newUserObj, JWT_SECRET_KEY);

        res.cookie("token", token).json(newUserObj);
      } else {
        res.status(400).json("Senha invalida");
      }
    } else {
      res.status(400).json("Usuário NÃO encontrado!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
