import config from "./utils/config";
import httpServer from "./services/server";
require('./services/sequelize')

//DB connection and server start
const init = async () => {

  const port = config.ECOMMERCE_APP_PORT;
  httpServer.listen(port, () => console.log(`SERVER UP ON PORT ${port}`));
};
init();
