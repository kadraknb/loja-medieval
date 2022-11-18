import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  public productsService = new ProductsService();

  async createProduct(req: Request, res: Response) {
    const products = req.body;

    const productsCreated = await this.productsService.create(products);
    res.status(201).json(productsCreated);
  }
}