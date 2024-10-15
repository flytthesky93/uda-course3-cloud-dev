import tokenService from '../service/tokenService.js';

class Authorization {
	async autho(req, res, next) {
		const authHeader = req.headers.authorization;
		const token = authHeader.split(" ")[1];
		if (!token) {
			console.log('Token header is empty!');
			return res.status(401).json({message: 'Unauthorized!'});
		}

		const verifyRes = await tokenService.verifyToken(token);
		if (!verifyRes.verified) {
			console.log('verify token error: ' + verifyRes.error + ' verify: ' + verifyRes.verified);
			return res.status(401).json({message: 'Unauthorized!'});
		}
		return next();
	}
}

export default new Authorization();