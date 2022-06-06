import bodyParser from 'body-parser';
import express from 'express';
import UsersRoute from './users/users.routes';
import cors from 'cors';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/users', UsersRoute);
export default app;
    