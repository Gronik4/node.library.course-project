const { Schema, model } = require('mongoose');
const { nanoid } = require('nanoid');
const messages = require('./messages');
const { moment } = require('moment');
moment.locale(ru);

const chatSchema = new Schema({
  _id: {
    type: ObjectId,
    required: true,
    unique: true,
    default: nanoid(5),
  },
  users: {
    type: [ObjectId, ObjectId],
    required: true,
  },
createdAt: {
  type: Date,
  required: true,
  default: moment.format('lll'),
},
messages: {
  type: [messages],
  default: ['',]
}
});

module.exports = model('Chat', chatSchema);