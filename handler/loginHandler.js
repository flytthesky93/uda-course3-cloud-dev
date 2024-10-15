import userService from '../service/userService.js';
import tokenService from '../service/tokenService.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

class LoginHandler {
  
  async login(req, res) {
    const {email, password} = req.body
    // Check user exist
    const user = await userService.findByEmail(email);
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password!"});
    }
    //Check password valid
    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword)
    if (!isPasswordValid) {
      return res.status(400).json({message: "Invalid username or password!"})
    }

    const tokenResponse = await tokenService.generateToken(user);
    res.status(200).json(tokenResponse)
  }
}

export default new LoginHandler();