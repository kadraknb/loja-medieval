import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  public productsService = new ProductsService();
  
  public async createProduct(req: Request, res: Response) {
    const products = req.body;

    const productsCreated = await this.productsService.create(products);
    res.status(201).json(productsCreated);
  }

  public async getProduct(req: Request, res: Response) {
    const getProduct = await this.productsService.getAll();

    res.status(200).json(getProduct);
  }
}