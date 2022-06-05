import databaseConfig from '../config/database.config';
import app from './app';

databaseConfig.initialize().then(() => {
  app.listen(5000);
});
