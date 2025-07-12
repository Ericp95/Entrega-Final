import jwt from 'jsonwebtoken';
import 'dotenv/config';


  const secret_key = process.env.JWT_SECRET_KEY;
 

export const authentication = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ mensaje: 'No se proporcionó el token' });
    }

    const token = authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, secret_key, (err) => {
        if (err) return res.status(403).json({ mensaje: err.message });
        next();
    });
};
