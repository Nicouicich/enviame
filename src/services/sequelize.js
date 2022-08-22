import config from "../utils/config";

const userModel = require("../models/users");
const { Sequelize } = require("sequelize");
// const User = require(`${__dirname}/models/user`)(sequelize);

const dialect = config.SEQUELIZE_DIALECT;
const username = config.SEQUELIZE_USERNAME;
const password = config.SEQUELIZE_PASSWORD;
const database = config.SEQUELIZE_DATABASE;

const host = config.SEQUELIZE_HOST;
let socketPath = undefined;

const sequelize = new Sequelize(database, username, password, {
  dialect: dialect,
  host: host,
  dialectOptions: {
    socketPath: socketPath,
  },
  logging: false,
});

const User = userModel(sequelize, Sequelize);

sequelize
  .sync({ alter: false })
  .then(() => {
    console.log("tables synchronized");
  })
  .catch((error) => {
    console.log("Couldn't sync database", error);
  });

module.exports = {
  User,
};
