const { Schema, model, default: mongoose } = require('mongoose');
const { nanoid } = require('nanoid');
require('dotenv').config();

const userSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
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

const Users = mongoose.model('UserModule', userSchema);

exports.findByEmail = function(email, cb) {
  process.nextTick( async function() {
    await mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, async (err)=> {
      if(err) {
        cb(new Error(`User ${email} does not found!!`))
      }
      return await cb(null, Users.find({email: email})); 
    });
    mongoose.close();
  })
}

module.exports = Users;