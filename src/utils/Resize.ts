import sharp from "sharp";
import {v4 as uuid} from "uuid";
import path from "path";

class Resize {
  folder: string;

  constructor(folder: string) {
    this.folder = folder;
  }

  async save(buffer: any) {
    const filename = Resize.filename();
    const filepath = this.filepath(filename);

    await sharp(buffer)
      .resize(300, 300, {
        fit: sharp.fit.inside,
        withoutEnlargement: true,
      })
      .toFile(filepath);

    return filename;
  }

  static filename() {
    return `${uuid()}.png`;
  }

  filepath(filename: string) {
    return path.resolve(`${this.folder}/${filename}`);
  }
}

export default Resize;
