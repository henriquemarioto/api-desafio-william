import cloudinary from "cloudinary";
import AppError from "../errors/AppError";

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

class Cloudinary {
  static async cloudUpload(image: any) {
    let result: any;

    await cloudinary.v2.uploader.upload(image, (err: any, res: any) => {
      if (err) {
        throw new AppError("Image upload failed", 400);
      }

      result = res;
    });

    return result.url;
  }
}

export default Cloudinary