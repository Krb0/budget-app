import { Request, Router } from 'express';
import database from '../../config/database.config';
import { User } from '../entities/user.entity';
import dtoMiddleware from '../middlewares/dto.middleware';
import { CreateUserDTO, LoginUserDTO } from './dtos';
import { UserController } from './users.controller';

import { UserService } from './users.service';

const UsersRoute = Router();

const controller = new UserController(
  new UserService(database.getRepository(User))
);

UsersRoute.post(
  '/register',
  dtoMiddleware(CreateUserDTO),
  controller.register.bind(controller)
);
UsersRoute.post(
  '/login',
  dtoMiddleware(LoginUserDTO),
  controller.login.bind(controller)
);
UsersRoute.get('/', controller.getAuth.bind(controller));

export default UsersRoute;
