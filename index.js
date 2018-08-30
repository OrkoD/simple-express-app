const app = require(`./app`);
const port = process.env.PORT || 3000;
require(`dotenv`).config();
const debug = require(`debug`)(`app:debug`);

require(`./startup/db`)();

app.listen(port, () => debug(`Magic is happening on port: ${port}...`));
