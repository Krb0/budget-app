import bodyParser from 'body-parser';
import cors from 'cors';

const middlewares = [
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  cors(),
];

export default middlewares;
