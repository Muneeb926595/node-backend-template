const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");

module.exports = function (app) {
  app.use(cors());
  app.use(helmet());
  app.use(compression());
};
