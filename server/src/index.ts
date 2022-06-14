import databaseConfig from '../config/database.config';
import App from './app';
import middlewares from './app.middlewares';
import routes from './app.routes';

databaseConfig.initialize().then(() => {
  const { app } = new App(middlewares, routes);

  app.listen(5000, () => {
    console.log('Server running correctly');
  });
});
