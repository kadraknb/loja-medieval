import { IRequests } from '../interfaces/IRequests';
import RequestsModel from '../models/requests.model';

export default class RequestsService {
  public requests = new RequestsModel();

  async getAll(): Promise<IRequests[]> {
    const AllRequests = await this.requests.getAll();
    return AllRequests;
  }
}