import bodyParser from 'body-parser';
import express from 'express';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

export default app;
