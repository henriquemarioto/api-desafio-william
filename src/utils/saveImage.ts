import path from "path";
import Resize from "./Resize";
import fs from "fs";
import Cloudinary from "../services/Cloudinary.service";

const saveImage = async (file: any) => {
  // Monta o caminho para a imagem a partir da raiz
  const imagePath = path.resolve("./", "public/images");

  // Cria a pasta da imagem se não existir
  if (!fs.existsSync(imagePath)) {
    fs.mkdirSync(imagePath, {
      recursive: true,
    });
  }

  // Salva a imagem localmente
  const fileUpload = new Resize(imagePath);
  const filename = await fileUpload.save(file.buffer);
  
  // Salva a imagem na nuvem
  const url = await Cloudinary.cloudUpload(`${imagePath}/${filename}`);

  // Delete a imagem localmente
  fs.unlinkSync(`${imagePath}/${filename}`);

  return url
};

export default saveImage;
