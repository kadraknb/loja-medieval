import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const router = Router();

const productsController = new ProductsController();

router.post('/', productsController.createProduct.bind(productsController));
router.get('/', productsController.getProduct.bind(productsController));

export default router;