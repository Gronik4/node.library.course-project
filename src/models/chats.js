const { Schema, model } = require('mongoose');
const { nanoid } = require('nanoid');

const chatSchema = new Schema({
  _id: {
    type: ObjectId,
    required: true,
    unique: true,
    default: nanoid(5),
  },
  users: {
    
  }
});

module.exports = model('Chat', chatSchema);