import { promises as fs } from 'fs'

class FileReader {

  async readFile(filePath) {
    try {
      const data = await fs.readFile(filePath, 'utf8');
      return data;
    } catch (err) {
      console.error('Error reading file ' + filePath + ": " + err);
      throw err;
    }
  }
}

export default new FileReader();