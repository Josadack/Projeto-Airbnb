import { Router } from "express";
import Place from "./model.js";
import { JWTVerify } from "../../utils/jwtVerify.js";
import { connectDb } from "../../config/db.js";
import { downloadImage, uploadImage } from "./controller.js";

const router = Router();

router.get("/", async (req, res) => {
   connectDb();
  try {
    const placeDocs = await Place.find();

    res.json(placeDocs);
  } catch (error) {
    console.log(error);
    res.status(500).json("Deu erro ao encontrar as Acomodações");
  }
});

router.get("/owner", async (req, res) => {
   connectDb();
  try {
    const userInfo = await JWTVerify(req);

    try {
      const placeDocs = await Place.find({ owner: userInfo._id });

      res.json(placeDocs);
    } catch (error) {
      console.log(error);
      res.status(500).json("Deu erro ao encontrar as Acomodações");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Deu erro ao verificar o usuário");
  }
});

router.get("/:id", async (req, res) => {
   connectDb();

   const {id: _id} = req.params;
    try {
      const placeDoc = await Place.findOne({ _id });

      res.json(placeDoc);
    } catch (error) {
      console.log(error);
      res.status(500).json("Deu erro ao encontrar as Acomodação");
    }
});

router.put("/:id", async (req, res) => {
  connectDb();

  const {id: _id} = req.params;

  const {
    title,
    city,
    photos,
    description,
    extras,
    perks,
    price,
    checkin,
    checkout,
    guests,
  } = req.body;

  try {
    const updatePlaceDoc = await Place.findByIdAndUpdate({_id},{
  
      title,
      city,
      photos,
      description,
      extras,
      perks,
      price,
      checkin,
      checkout,
      guests,
    });

    res.json(updatePlaceDoc);
  } catch (error) {
    console.log(error);
    res.status(500).json("Deu erro ao atualizar a acomodação");
  }
});

router.post("/", async (req, res) => {
  connectDb();

  const {
    title,
    city,
    photos,
    description,
    extras,
    perks,
    price,
    checkin,
    checkout,
    guests,
  } = req.body;

  try {
    const { _id: owner } = await JWTVerify(req);

    const newPlaceDoc = await Place.create({
      owner,
      title,
      city,
      photos,
      description,
      extras,
      perks,
      price,
      checkin,
      checkout,
      guests,
    });

    res.json(newPlaceDoc);
  } catch (error) {
    console.log(error);
    res.status(500).json("Deu erro ao criar um novo lugar");
  }
});

router.post("/upload/link", async (req, res) => {
  const { link } = req.body;

  try {
    const filename = await downloadImage(link);

    res.json(filename);
  } catch (error) {
    console.log(error);
    res.status(500).json("Erro ao baixar a imagem");
  }
});

router.post("/upload", uploadImage().array("files", 10), async (req, res) => {
  const uploadedFileNames = req.files.map((file) => file.filename);
  res.json(uploadedFileNames);
});

export default router;
