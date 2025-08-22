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

const UsersModule = mongoose.model('UserModule', userSchema);

exports.findByEmail = function(email, cb) {
  process.nextTick( async function() {
    await mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Ошибка подключения: '));
    db.once('open', ()=> {
      const user = UsersModule.findOne({email: email}, cb(null, user));
    })
    mongoose.close();
  })
}

module.exports = UsersModule;