import { IProducts } from '../interfaces/IProducts';
import ProductsModel from '../models/products.model';

export default class ProductsService {
  public products = new ProductsModel();

  public create(productsData: IProducts): Promise<IProducts> {
    return this.products.create(productsData);
  }
}