import fs from "fs";
import Jimp from "jimp";
import axios from 'axios';
import path from 'path';


// filterImageFromURL
// helper function to download, filter, and save the filtered image locally
// returns the absolute path to the local image
// INPUTS
//    inputURL: string - a publicly accessible url to an image file
// RETURNS
//    an absolute path to a filtered image locally saved file
 export async function filterImageFromURL(inputURL) {
  return new Promise(async (resolve, reject) => {
    try {
      // Fetch the image
      const response = await axios({
        url: inputURL,
        responseType: 'arraybuffer'
      });
      const buffer = Buffer.from(response?.data, 'binary');

      //read the buffer after use axios
      const photo = await Jimp.read(buffer);
      // Save file in a stable directory
      const outpath = path.join(process.cwd(), 'filtered_images', `filtered.${Math.floor(Math.random() * 2000)}.jpg`);
      await photo
        .resize(256, 256) // resize
        .quality(60) // set JPEG quality
        .greyscale() // set greyscale
        .write(outpath, (img) => {
          resolve(outpath);
        });
    } catch (error) {
      console.log('Error when filtering image: ' + error);
      reject(error);
    }
  });
}

// deleteLocalFiles
// helper function to delete files on the local disk
// useful to cleanup after tasks
// INPUTS
//    files: Array<string> an array of absolute paths to files
 export async function deleteLocalFile(filePath) {
  await fs.unlinkSync(filePath);
}
