import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key= process.env.JWT_SECRET_KEY;


export const generateToken = (userData) => {
  if (!userData?.password || !userData?.email) {
    throw new Error('Faltan datos requeridos para generar el token');
  }

  const payload = {
    //id: userData.id,
    email: userData.email,
    password: userData.password
  };

  return jwt.sign(payload, secret_key, { expiresIn: '1h' });
};