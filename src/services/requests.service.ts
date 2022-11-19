import { IRequests } from '../interfaces/IRequests';
import RequestsModel from '../models/requests.model';

export default class RequestsService {
  public requests = new RequestsModel();

  async getAll(): Promise<IRequests[]> {
    const AllRequests = await this.requests.getAll();
    return AllRequests;
  }

  async create(productsIds: number[], userId: number): Promise<IRequests> {
    await this.requests.create(productsIds, userId);
    return { userId, productsIds };
  }
}