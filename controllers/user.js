const { User } = require(`../models/user`);
const _ = require(`lodash`);

// GET ALL USERS
module.exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().sort(`-date`);
    res.render(`users`, {
      users
    });
  } catch (err) {
    res.status(404).send(err.message)
  }
};

// GET ONE USER
module.exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.render(`user`, {
      user
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
};

// RENDER FORM FOR CREATION USER
module.exports.renderNewForm = (eq, res) => {
  res.render(`create-user`);
};

// CREATE USER
module.exports.addUser = async (req, res) => {
  try {
    const user = new User(
      _.pick(req.body, [
        `name`,
        `email`,
        `phone`,
        `catchPhrase`,
        `company`,
        `avatar`
      ])
    );
    await user.save();
    res.redirect(`/users`);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

// DELETE USER
module.exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id);
    res.redirect(`/users`);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

// RENDER EDIT FORM
module.exports.renderEditForm = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.render(`create-user`, {
      user
    })
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// UPDATE USER
module.exports.updateUser = async (req, res) => {
  try {
    const user = _.pick(req.body, [
      `name`,
      `email`,
      `phone`,
      `catchPhrase`,
      `company`,
      `avatar`
    ]);
    await User.findByIdAndUpdate(req.params.id, { $set: user }, { new: true });
    res.redirect(`/users/${req.params.id}`);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// const fs = require(`fs`);
// const fileName = `./users.json`;

// module.exports.getUsers = (req, res) => {
//   fs.readFile(fileName, `utf8`, (err, data) => {
//     if (err) throw err;
//     const users = JSON.parse(data);
//     res.render(`users`, {
//       users
//     });
//   });
// };

// module.exports.getUser = (req, res) => {
//   fs.readFile(fileName, `utf8`, (err, data) => {
//     if (err) throw err;
//     const users = JSON.parse(data);
//     const user = users.filter(u => u.id === +req.params.id)[0];
//     res.render(`user`, {
//       user
//     });
//   });
// };