import { hash, verify } from 'argon2';
import database from '../../config/database.config';
import { User } from '../entities/user.entity';

export class UserService {
  async register({ email, password }: Partial<User>) {
    try {
      if (email && password) {
        const repo = database.getRepository(User);
        const hashedPass = await hash(password);
        const user = repo.create({ email, password: hashedPass });
        await repo.save(user);
        return user;
      }
    } catch (err) {
      return null;
    }
  }
  async login({ email, password }: User) {
    if (email && password) {
      const repo = database.getRepository(User);
      const user = await repo.findOne({
        where: {
          email: email,
        },
      });
      if (user) {
        const verification = await verify(user.password, password);
        if (verification) return user;
      }
    }
    return null;
  }
}
