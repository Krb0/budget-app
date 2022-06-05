import bodyParser from 'body-parser';
import express from 'express';
import UsersRoute from './users/users.routes';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', UsersRoute);
export default app;
