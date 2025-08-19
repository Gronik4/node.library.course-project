const { Schema, model } = require('mongoose');
const { nanoid } = require('nanoid');
const messages = require('./messages');
const { moment } = require('moment');
moment.locale(ru);

const chatSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
    default: nanoid(5),
  },
  users: {
    type: [Schema.Types.ObjectId, Schema.Types.ObjectId],
    required: true,
  },
createdAt: {
  type: Date,
  required: true,
  default: moment.format('lll'),
},
messages: {
  type: [{ type: { type: String }, ticker: String }],
  default: ['',]
}
});

module.exports = model('Chat', chatSchema);