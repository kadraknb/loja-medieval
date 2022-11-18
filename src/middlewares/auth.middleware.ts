import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default function authMiddleware(req: Request, _res: Response, next: NextFunction) {
  try {
    const { authorization: token } = req.headers;

    if (!token) {
      const e = new Error('Token não encontrado!');
      e.name = '401';
      throw e;
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    req.body.user = decoded;

    next();
  } catch (err) {
    console.log(err);
    const e = new Error('Não autorizado!');
    e.name = '401';
    throw e;
  }
}