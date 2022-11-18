import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';

// require('dotenv/config');

export default function createToken(data: IUser): string {
  const token = jwt.sign(data, process.env.JWT_SECRET as string, {
    expiresIn: '1d',
    algorithm: 'HS256', 
  });

  return token;
}