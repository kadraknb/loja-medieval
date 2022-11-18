// src/models/User.ts
import { RowDataPacket } from 'mysql2';
import mysql from './connection';
import { ILogin } from '../interfaces/ILogin';

export default class LoginModel {
  private connection = mysql;

  public async getUserByEmailAndPassword(login: ILogin): Promise<ILogin[]> {
    const { username, password } = login;
    const [rows] = await this.connection.execute<(
    ILogin[] & RowDataPacket[])>(
      'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?',
      [username, password],
      );
      
    return rows;
  }
}