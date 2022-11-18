import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import productsMiddleware from '../middlewares/products.validetion.middleware';

const router = Router();

const productsController = new ProductsController();

router.post('/', productsMiddleware, productsController.createProduct.bind(productsController));
router.get('/', productsController.getProduct.bind(productsController));

export default router;