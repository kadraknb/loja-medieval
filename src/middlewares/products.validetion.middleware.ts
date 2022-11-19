import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export default function productsMiddleware(req: Request, _res: Response, next: NextFunction) {
  const { name, amount } = req.body;

  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  });

  const { error } = schema.validate({ name, amount });

  if (error) {
    error.stack = error?.details[0].type === 'any.required' ? '400' : '422';
    throw error;
  }

  next();
}