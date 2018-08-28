const fs = require(`fs`);
const fileName = `./users.json`;

module.exports.getUsers = (req, res) => {
  fs.readFile(fileName, `utf8`, (err, data) => {
    if (err) throw err;
    const users = JSON.parse(data);
    res.render(`users`, {
      users
    });
  });
};

module.exports.getUser = (req, res) => {
  fs.readFile(fileName, `utf8`, (err, data) => {
    if (err) throw err;
    const users = JSON.parse(data);
    const user = users.filter(u => u.id === +req.params.id)[0];
    res.render(`user`, {
      user
    });
  });
};
