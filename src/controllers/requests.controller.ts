import { Request, Response } from 'express';
import RequestsService from '../services/requests.service';

export default class RequestsController {
  public requestsService = new RequestsService();

  public async getAllRequests(req: Request, res: Response) {
    const AllRequests = await this.requestsService.getAll();

    res.status(200).json(AllRequests);
  }
}