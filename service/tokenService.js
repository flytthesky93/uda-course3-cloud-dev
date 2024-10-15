import awsService from './awsService.js';
import fileUtil from '../util/fileUtil.js';
import jwt from "jsonwebtoken";

class TokenService {
	async generateToken (user) {
		const PRIVATE_KEY = await awsService.getSecret("jwt-priv-hoangnm")
		// const PRIVATE_KEY = await fileUtil.readFile('./secret/private.pem');
	    const accessToken = jwt.sign(
	      {
	        email: user.email,
	        tokenType: 'ACCESS_TOKEN',
	      },
	      PRIVATE_KEY,
	      { expiresIn: process.env['ACCESS_TOKEN_EXPIRY'], algorithm: "RS256" }
	    );
	    return {token: accessToken}
	}

	async verifyToken (token) {
		const PUBLIC_KEY = await awsService.getSecret("jwt-pub-hoangnm")
		// const PUBLIC_KEY = await fileUtil.readFile('./secret/public.pem');

  		try {
		    const verified = jwt.verify(token, PUBLIC_KEY);
		    return {verified: true, error: null};
  		} catch (err) {
    		return {verified: false, error: err};
  		}
	}
}

export default new TokenService();