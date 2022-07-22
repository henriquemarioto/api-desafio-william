import path from "path";
import Resize from "./Resize";
import fs from "fs";

const saveImage = async (file: any) => {
  const imagePath = path.resolve("./", "public/images");
  console.log(imagePath)

  if (!fs.existsSync(imagePath)) {
    fs.mkdirSync(imagePath, {
      recursive: true,
    });
  }

  const fileUpload = new Resize(imagePath);
  const filename = await fileUpload.save(file.buffer);

  return `${imagePath}/${filename}`;
};

export default saveImage;
