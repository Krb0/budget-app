import { NextFunction, Request, Response } from 'express';
import { User } from '../entities/user.entity';
import { UserService } from './users.service';

export class UserController {
  constructor(private user: UserService) {}

  async register(req: Request, res: Response): Promise<void> {
    const body = req.body;
    const user = await this.user.register(body);
    user
      ? res.status(200).json(user)
      : res.status(400).json({ message: 'User not created' });
  }
  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    const body = req.body;
    const user = await this.user.login(body);
    user
      ? res.status(200).json(user)
      : res.status(400).json({ message: 'Invalid credentials' });
  }
  async getAuth(req: Request, res: Response) {
    const header = req.get('Authorization')?.split('Bearer ')[1];
    if (header) {
      const response = await this.user.getAuth(header);
      res.send(response ? { data: response } : { data: null });
      return;
    }
    res.send(header ? { header } : { data: null });
  }
}
