export interface IUser {
  id?: number | Promise<number>;
  username: string;
  classe: string;
  level: number;
  password?: string;
}