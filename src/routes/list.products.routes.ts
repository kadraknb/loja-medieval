import { Router } from 'express';
import RequestsController from '../controllers/requests.controller';

const router = Router();

const requestsController = new RequestsController();

router.get('/', requestsController.getAllRequests.bind(requestsController));

export default router;