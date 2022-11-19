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

  public async create(productsIds: number[], userId: number): Promise<void> {
    const [dataInserted] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );
    
    const { insertId } = dataInserted;
    
    productsIds.forEach(async (productsId) => {
      await this.connection.execute<ResultSetHeader>(
        'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
        [insertId, productsId],
      );
    });
  }
}