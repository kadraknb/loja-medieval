import { NextFunction, Request, Response } from 'express';

const error = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  const status = err.name || 500;
  const message = err.message || 'Erro inesperado. Por favor, tente mais tarde';

  return res.status(Number(status)).json({ message });
};

export default error;