const { Schema, model } = require('mongoose');
const { nanoid } = require('nanoid');
const { moment } = require('moment');
moment.locale(ru);

const advertisementSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
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
    default: moment.format('lll'),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: moment.format('lll'),
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