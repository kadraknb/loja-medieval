import { Request, Response, NextFunction } from 'express';

export default function loginMiddleware(req: Request, _res: Response, next: NextFunction) {
  const { username, password } = req.body;

  if (!username) {
    const e = new Error('"username" is required');
    e.name = '400';
    throw e;
  }

  if (!password) {
    const e = new Error('"password" is required');
    e.name = '400';
    throw e;
  }

  next();
}