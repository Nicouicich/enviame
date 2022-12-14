import dotenv from "dotenv";

dotenv.config();

export default {
  ECOMMERCE_SERVICE_NAME: process.env.ECOMMERCE_SERVICE_NAME,
  ECOMMERCE_SERVICE_PATH: process.env.ECOMMERCE_SERVICE_PATH,
  ECOMMERCE_APP_PORT: process.env.ECOMMERCE_APP_PORT,

  ECOMMERCE_MYSQL_NAME: process.env.ECOMMERCE_MYSQL_NAME,
  ECOMMERCE_MYSQL_DATABASE: process.env.ECOMMERCE_MYSQL_DATABASE,
  ECOMMERCE_MYSQL_PORT: process.env.ECOMMERCE_MYSQL_PORT,

  SEQUELIZE_DIALECT: process.env.SEQUELIZE_DIALECT,
  SEQUELIZE_USERNAME: process.env.SEQUELIZE_USERNAME,
  SEQUELIZE_PASSWORD: process.env.SEQUELIZE_PASSWORD,
  SEQUELIZE_DATABASE: process.env.SEQUELIZE_DATABASE
};
