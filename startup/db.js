const mongoose = require(`mongoose`);
const debug = require(`debug`)(`app:debug`);

module.exports = () => {
  mongoose.connect(`mongodb://localhost:27017/express-users`)
    .then(() => debug(`Connected to MongoDb...`))
};
