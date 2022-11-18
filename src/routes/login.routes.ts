import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import loginMiddleware from '../middlewares/login.validetion.middleware';

const router = Router();

const loginController = new LoginController();

router.post('/', loginMiddleware, loginController.create.bind(loginController));

export default router;