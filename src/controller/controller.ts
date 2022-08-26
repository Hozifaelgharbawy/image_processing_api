import { Request, Response } from "express";
import path from "path";
import { saveImages } from "../utils/utils";


let imgesNew = [] as unknown as string
let name = ["encenadaport", "fjord", "icelandwaterfall", "palmtunnel", "santamonica"]
const cntr =  async (req: Request, res: Response) : Promise<void> => {
    if (!req.query.filename) {
         res.status(200).send("Enter file name")
         return;
    }
    
    const filename = req.query.filename as unknown as string;
    const height = parseInt(req.query.height as unknown as string) ;
    const width = parseInt(req.query.width as unknown as string) ;

    
    if (!name.includes(`${filename}`)) {
        res.status(200).send("Enter the correct file name ")
        return;
    }
    if (req.query.filename && !req.query.height && !req.query.width) {
        return res.status(200).sendFile(path.resolve(`./images/${filename}.jpg`))
    }
    if (!isNaN(Number(height)) && !isNaN(Number(height))) {
        const result = imgesNew.includes(`${filename}_${height}x${width}.jpg`) as boolean
        if (result) {
            
            return res.status(200).sendFile(path.resolve(`./newImages/${filename}_${height}x${width}.jpg`))
        }
        else {
            imgesNew = imgesNew + `${filename}_${height}x${width}.jpg`

            const pathImages = await saveImages(filename,height,width) as string 
            
            
            return res.status(200).sendFile(path.resolve(pathImages))
        }
    }
    return ;
    
}

export { cntr };