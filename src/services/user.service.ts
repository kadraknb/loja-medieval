import { IUser } from '../interfaces/IUser';
import UserModel from '../models/user.model';
import createToken from '../utils/create.Jwt';

export default class UserService {
  public user = new UserModel();

  public create(userData: IUser): string {
    const { username, classe, level } = userData;
    this.user.create(userData);

    const token = createToken({ username, classe, level });
    return token;
  }
}