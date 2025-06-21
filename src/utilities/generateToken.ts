import jwt from 'jsonwebtoken';
import { JwtPayload } from '../types/auth';

export const generateToken = (
  payload: JwtPayload
) => {
  const secret = process.env.JWT_SECRET;
  
  if (!secret) {
    throw new Error('JWT_SECRET is not defined in environment variables.');
  }

  return jwt.sign(
    payload,
    secret,
    { expiresIn:'1d' }
  );
};