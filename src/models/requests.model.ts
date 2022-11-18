import { ResultSetHeader } from 'mysql2';
import mysql from './connection';
import { IRequests } from '../interfaces/IRequests';

export default class ProductsModel {
  private connection = mysql;

  async getAll(): Promise<IRequests[]> {
    const [result] = await this.connection.execute<IRequests[] & ResultSetHeader>(
      `SELECT O.id, O.userId, JSON_ARRAYAGG(P.id) AS productsIds
      FROM Trybesmith.Orders as O
      INNER JOIN Trybesmith.Products AS P
      ON O.id = P.orderId
      GROUP BY O.id;`,
    );
    return result;
  }
}