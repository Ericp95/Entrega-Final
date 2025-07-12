import jwt from 'jsonwebtoken';
import 'dotenv/config';


  const secret_key = process.env.JWT_SECRET_KEY;
 
  // Middleware para verificar el token JWT
/* export const authentication = (req, res, next) => {
    //const token = req.headers['authorization'].split(" ")[1]; //.split(" ")[1]

    const authHeader = req.headers.authorization;
if (!authHeader) {
  return res.status(401).json({ mensaje: 'No se proporcionó el token' });
}

const token = authHeader.split(' ')[1];
  

    if (!token) return res.sendStatus(401);


    jwt.verify(token, secret_key, (err) => {
        if (err) return res.sendStatus(403);
        next();
    });
}*/

/*export const authentication = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header missing' });
    }

    const token = authHeader.split("-")[1];

    if (!token) {
        return res.status(401).json({ message: 'Token missing' });
    }

    jwt.verify(token, secret_key, (err) => {
        if (err) return res.sendStatus(403);
        next();
    });
}*/