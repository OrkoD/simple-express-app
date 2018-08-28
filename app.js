const express = require(`express`);
const app = express();
const morgan = require(`morgan`);
const homeRoutes = require(`./routes/home`);
const usersRoutes = require(`./routes/user`);

app.use(morgan(`tiny`));

app.set(`view engine`, `pug`);
app.set(`views`, `./views`);
app.use(`/`, homeRoutes);
app.use(`/users`, usersRoutes);

module.exports = app;
