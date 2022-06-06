import { hash, verify } from 'argon2';
import database from '../../config/database.config';
import { User } from '../entities/user.entity';
import jwt from 'jsonwebtoken';
export class UserService {
  constructor(private repo = database.getRepository(User)) {}
  async register({ email, password }: Partial<User>) {
    try {
      if (email && password) {
        const hashedPass = await hash(password);
        const newUser = this.repo.create({ email, password: hashedPass });
        const user = await this.repo.save(newUser);
        const [at, rt] = this.getTokens(user.id, user.email);
        await this.updateRt(user.id, rt);
        return { accessToken: at, refreshToken: rt };
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  async login({ email, password }: User) {
    if (email && password) {
      const user = await this.repo.findOne({
        where: {
          email: email,
        },
      });
      if (user) {
        const verification = await verify(user.password, password);
        if (verification) {
          const [at, rt] = this.getTokens(user.id, user.email);
          await this.updateRt(user.id, rt);
          return { accessToken: at };
        }
      }
    }
    return null;
  }
  getTokens(userId: number, email: string): any {
    const at = jwt.sign(
      {
        sub: userId,
        email,
        iat: Math.floor(Date.now() / 1000) - 60 * 60 * 2,
      },
      process.env.AT_SECRET!
    );
    const rt = jwt.sign(
      {
        sub: userId,
        email,
        iat: Math.floor(Date.now() / 1000) - 60 * 60 * 24 * 7,
      },
      process.env.RT_SECRET!
    );

    return [at, rt];
  }
  async updateRt(userId: number, rt: string) {
    const user = await this.repo.findOne({
      where: {
        id: userId,
      },
    });
    if (user) {
      const hashedRt = await hash(rt);
      user.refreshtoken = hashedRt;
      await this.repo.save(user);
    }
  }
  async refresh(userId: number, rt: string) {
    const user = await this.repo.findOne({
      where: {
        id: userId,
      },
    });
    if (user) {
      const verification = await verify(user.refreshtoken!, rt);
      if (verification) {
        const [at, rt] = this.getTokens(user.id, user.email);
        await this.updateRt(user.id, rt);
        return [at, rt];
      }
    }
  }
}
