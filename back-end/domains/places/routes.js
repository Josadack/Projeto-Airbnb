import { Router } from "express";
import Place from "./model.js";
import { JWTVerify } from "../../utils/jwtVerify.js";
import { connectDb } from "../../config/db.js";
import { downloadImage, uploadImage } from "./controller.js";


const router = Router();

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
    const {_id: owner} = await JWTVerify(req)

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

    res.json(newPlaceDoc)
  } catch (error) {
    console.log(error);
    res.status(500).json("Deu erro ao criar um novo lugar");
  }
});

router.post('/upload/link', async (req, res) =>{
  const {link} = req.body;

  try {
    const  filename = await downloadImage(link);

    res.json(filename)
  } catch (error) {
    console.log(error);
    res.status(500).json("Erro ao baixar a imagem");
  }
  
});

router.post(
  "/upload",
  uploadImage().array("files", 10),
   async (req, res) => {

       const uploadedFileNames = req.files.map(file => file.filename);
       res.json(uploadedFileNames)

    
});

export default router;
