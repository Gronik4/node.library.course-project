const { Schema, model } = require('mongoose');
const { nanoid } = require('nanoid');
const { moment } = require('moment');
moment.locale(ru);

const messageSchema = new Schema({
  _id: {
    type: ObjectId,
    required: true,
    unique: true,
    default: nanoid(5),
  },
  author: {
    type: ObjectId,
    required: true,
  },
  sentAt: {
    type: Date,
    required: true,
    default: moment.format('lll'),
  },
  text: {
    type: String,
    required: true
  },
  readAt: {
    type: Date,
    default: moment.format('lll'),
  }
});

module.exports = model('Message', messageSchema);