import { Router } from 'express';
import { UserController } from './users.controller';

import { UserService } from './users.service';

const UsersRoute = Router();

const controller = new UserController(new UserService());

UsersRoute.post('/register', controller.register.bind(controller));

export default UsersRoute;
