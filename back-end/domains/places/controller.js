import download from "image-downloader";
import mime, { contentType } from "mime-types";
import multer from "multer";
import { __dirname } from "../../server.js";

const getExtension = (path) => {
  const mimeType = mime.lookup(path);
  const contentType = mime.contentType(mimeType);
  const extension = mime.extension(contentType);

  return extension;
};

export const downloadImage = async (link) => {
    const extension = getExtension(link)
  const destination = `${__dirname}/tmp/`;

  const filename = `${Date.now()}.${extension}`;
  const fullPath = `${destination}${filename}`;

  try {
    const options = {
      url: link,
      dest: fullPath,
    };
    await download.image(options);

    return filename;
    //console.log("Save to", filename);
  } catch (error) {
    console.error(err);
    throw error;
  }
};

export const uploadImage = () => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `${__dirname}/tmp/`);
    },
    filename: function (req, file, cb) {
     const extension = getExtension(file.originalname);
     const uniqueSuffix = Math.round(Math.random() * 1E9)

      cb(null, `${ Date.now()}-${uniqueSuffix}.${extension}`);
    },
  });
  return multer({ storage });
};
