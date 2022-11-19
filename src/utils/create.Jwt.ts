import jwt from 'jsonwebtoken';
import { ILogin } from '../interfaces/ILogin';
import { IUser } from '../interfaces/IUser';

export default function createToken(data: IUser | ILogin): string {
  const token = jwt.sign(data, process.env.JWT_SECRET as string, {
    expiresIn: '1d',
    algorithm: 'HS256', 
  });

  return token;
}