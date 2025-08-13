const { Schema, model } = require('mongoose');
const { nanoid } = require('nanoid');

const userSchema = new Schema({
  _id: {
    type: ObjectId,
    required: true,
    unique: true,
    default: nanoid(5),
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  contactPhone: {
    type: String,
  }
});

module.exports = model('User', userSchema);