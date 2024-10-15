import bcrypt from 'bcrypt'

const saltRounds = 10

class bcryptUtil {
  async hashText(input) {
    try {
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedText = await bcrypt.hash(input, salt);
      return hashedText;
    } catch (error) {
      console.error('Error hashing:', error);
    }
  }

  async checkText(text, hashedText) {
    try {
      const match = await bcrypt.compare(text, hashedText);
      return match;
    } catch (error) {
      console.error('Error comparing hash text:', error);
    }
  }
}

export default new bcryptUtil();