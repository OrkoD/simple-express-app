const mongoose = require(`mongoose`);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  catchPhrase: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

exports.User = mongoose.model(`User`, userSchema);
