import { Dialect, Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

const { DB_NAME, DB_USER, DB_HOST, DB_DRIVER, DB_PASSWORD } = process.env;

export default new Sequelize(
  DB_NAME as string,
  DB_USER as string,
  DB_PASSWORD,
  {
    dialect: DB_DRIVER as Dialect,
    host: DB_HOST,
  }
);
