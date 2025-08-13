const { Schema, model } = require('mongoose');
const { nanoid } = require('nanoid');

const messageSchema = new Schema({
  _id: {
    type: ObjectId,
    required: true,
    unique: true,
    default: nanoid(5),
  },
});

module.exports = model('Message', messageSchema);