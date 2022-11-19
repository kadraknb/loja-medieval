import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export default function requestMiddleware(req: Request, _res: Response, next: NextFunction) {
  const { productsIds } = req.body;

  const schema = Joi.object({
    productsIds: Joi.array().min(1).items(Joi.number()).required()
      .messages({
        'array.min': '"productsIds" must include only numbers',
      }),
  });
  
  const { error } = schema.validate({ productsIds });
  
  if (error) {
    error.stack = error?.details[0].type === 'any.required' ? '400' : '422';
    throw error;
  }

  next();
}