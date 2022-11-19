import { ILogin } from '../interfaces/ILogin';
import LoginModel from '../models/login.model';
import createToken from '../utils/create.Jwt';

export default class LoginService {
  public login = new LoginModel();

  public async create(login: ILogin): Promise<string> {
    const { username } = login;
    const result = await this.login.getUserByEmailAndPassword(login);

    if (!result[0]) {
      const e = new Error('Username or password invalid');
      e.stack = '401';
      throw e;
    }
    
    const token = createToken({ id: result[0].id, username });
    return token;
  }
}