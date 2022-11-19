import { IUser } from '../interfaces/IUser';
import UserModel from '../models/user.model';
import createToken from '../utils/create.Jwt';

export default class UserService {
  public user = new UserModel();

  public async create(userData: IUser): Promise<string> {
    const { username, classe, level } = userData;
    const id = await this.user.create(userData);

    const token = createToken({ id, username, classe, level });
    return token;
  }
}