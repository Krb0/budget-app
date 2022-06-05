import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { User } from '../src/entities/user.entity';
dotenv.config();
const database = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User],
  synchronize: true,
  logging: false,
});

export default database;
