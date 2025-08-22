const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
require('dotenv').config();

//const router = require('./Routes/index');
const userRouter = require('./Routes/users');
const advertRouter = require('./Routes/advertisment');
const chatRouter = require('./Routes/chats');

const app = express();

//app.use('/', router);
app.use('/user', userRouter);
app.use('/advertisements', advertRouter);
app.use('/chats', chatRouter);

async function start(PORT, UrlDb) {
  try{
    mongoose.connect(UrlDb);
    app.listen(PORT, ()=>{
      console.log(`Server start on port ${PORT}`);
    })
  } catch (e) {
    console.log(`Server not start. Err ${e.message}`)
  }
}

const UrlDb = process.env.MONGO_URL || 'mongodb://localhost:27017/library';
const PORT = process.env.HTTP_PORT || 3015;

start(UrlDb, PORT);