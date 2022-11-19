// src/models/User.ts
import { ResultSetHeader } from 'mysql2';
import mysql from './connection';
import { IUser } from '../interfaces/IUser';

export default class UserModel {
  private connection = mysql;

  public async create(user: IUser): Promise<number> {
    const { username, classe, level, password } = user;
    const [dataInserted] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    // const [dataInserted] = result;
    const { insertId } = dataInserted;
    return insertId;
  }
}