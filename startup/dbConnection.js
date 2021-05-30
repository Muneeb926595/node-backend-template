const mongoose = require("mongoose");

const config = require("config");

module.exports = function () {
  mongoose.set("useFindAndModify", false);
  mongoose.set("useCreateIndex", true);
  const uri = config.mongoDb.uri;
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log(`DataBase Connection Successfully:`);
    })
    .catch((err) => {
      console.log(`DataBase Connection Error:`, err.message);
    });
};
