import { Router } from 'express';
import RequestsController from '../controllers/requests.controller';
import authMiddleware from '../middlewares/auth.middleware';
import requestMiddleware from '../middlewares/request.validetion.middleware';

const router = Router();

const requestsController = new RequestsController();

router.get('/', requestsController.getAllRequests.bind(requestsController));
router.post(
  '/',
  authMiddleware,
  requestMiddleware,
  requestsController.createRequests.bind(requestsController),
);

export default router;