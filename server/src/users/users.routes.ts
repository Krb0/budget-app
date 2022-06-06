import { Router } from 'express';
import dtoMiddleware from '../middlewares/dto.middleware';
import { CreateUserDTO, LoginUserDTO } from './dtos';
import { UserController } from './users.controller';

import { UserService } from './users.service';

const UsersRoute = Router();

const controller = new UserController(new UserService());

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

export default UsersRoute;
