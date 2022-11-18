import { ResultSetHeader } from 'mysql2';
import mysql from './connection';
import { IProducts } from '../interfaces/IProducts';

export default class ProductsModel {
  private connection = mysql;

  public async create(products: IProducts): Promise<IProducts> {
    const { name, amount } = products;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...products };
  }

  async getAll(): Promise<IProducts[]> {
    const [result] = await this.connection.execute<IProducts[] & ResultSetHeader>(
      `SELECT
        id, name, amount 
      FROM Trybesmith.Products`,
    );
    return result;
  }
}