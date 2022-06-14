import { Application } from 'express';
import express from 'express';

class App {
  public app: Application;
  constructor(middlewares: any[], routes: any[]) {
    this.app = express();
    this.middlewares(middlewares);
    this.routes(routes);
  }
  middlewares(arr: any[]) {
    arr.forEach((middleware) => this.app.use(middleware));
  }
  routes(arr: any[]) {
    arr.forEach((route) => this.app.use(...route));
  }
}

export default App;
