import { Request, Response } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  public loginService = new LoginService();

  async create(req: Request, res: Response) {
    const login = req.body;

    const token = await this.loginService.create(login);
    res.status(200).json({ token });
  }
}