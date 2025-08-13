const { Schema, model } = require('mongoose');
const { nanoid } = require('nanoid');

const advertisementSchema = new Schema({
  _id: {
    type: ObjectId,
    required: true,
    unique: true,
    default: nanoid(5),
  },
  shortText: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  images: {
    type: [String],
  },
  userId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  tags: {
    type: [String],
  },
  isDeleted: {
    type: Boolean,
    required: true
  }
});

module.exports = model('Advertisement', advertisementSchema);