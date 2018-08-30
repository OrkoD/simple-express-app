const app = require(`./app`);
const port = process.env.PORT || 3000;
require(`dotenv`).config();
const debug = require(`debug`)(`app:debug`);

require(`./startup/db`)();

// const { User } = require(`./models/user`);
// const user = new User({
//   name: `Mrs. Dennis Schulist`,
//   email: `Julianne.OConner@kory.or`,
//   phone: `493-170-9623 x156`,
//   catchPhrase: `Multi-tiered zero tolerance productivity`,
//   company: `Robel-Corkery`,
//   imagePath: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOcvv2odddxPP5AcMEq74E5xl5r55nxE5gEYz88ThR8W0w_uNv`
// });
// user.save();

app.listen(port, () => debug(`Magic is happening on port: ${port}...`));
