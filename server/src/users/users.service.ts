import database from '../../config/database.config';
import { User } from '../entities/user.entity';

export class UserService {
  async register({ email, password }: Partial<User>) {
    if (email && password) {
      const repo = database.getRepository(User);
      const user = repo.create({ email, password });
      await repo.save(user);
      return user;
    }
    return null;
  }
}
