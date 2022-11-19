import { Request, Response, NextFunction } from 'express';
import Jwt from 'jsonwebtoken';

export default function authMiddleware(req: Request, _res: Response, next: NextFunction) {
  const { authorization: token } = req.headers;
  
  if (!token) {
    const e = new Error('Token not found');
    e.stack = '401';
    throw e;
  }
  try {
    const decoded = Jwt.verify(token, process.env.JWT_SECRET as string);

    req.body.user = decoded;

    next();
  } catch (_err) {
    const e = new Error('Invalid token');
    e.stack = '401';
    
    throw e;
  }
}