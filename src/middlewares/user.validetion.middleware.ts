import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export default function userMiddleware(req: Request, _res: Response, next: NextFunction) {
  const { username, classe, level, password } = req.body;

  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    classe: Joi.string().min(3).required(),
    level: Joi.number().min(1).required(),
    password: Joi.string().min(8).required(),
  });

  const { error } = schema.validate({ username, classe, level, password });

  if (error) {
    error.stack = error?.details[0].type === 'any.required' ? '400' : '422';
    throw error;
  }

  next();
}