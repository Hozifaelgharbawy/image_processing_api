import sharp from "sharp";
import path from "path";

const saveImages = async (filename: string, height: number, width: number): Promise<string> => {

    await sharp(path.resolve(`./images/${filename}.jpg`))
        .resize({ width: width, height: height })
        .toFile(`./newImages/${filename}_${height}x${width}.jpg`)


    
    return `./newImages/${filename}_${height}x${width}.jpg`

}



export { saveImages };