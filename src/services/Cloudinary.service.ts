import cloudinary from "cloudinary";
import AppError from "../errors/AppError";

cloudinary.v2.config({
  cloud_name: "dpspbfi2p",
  api_key: "339855762382827",
  api_secret: "92VeBSaTV0DhOSNcy4n_23XhY08",
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