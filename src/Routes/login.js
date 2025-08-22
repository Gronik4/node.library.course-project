const express = require('express');
const router = express.Router();
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModule = require('../models/users');

const verify = (email, password, done)=> {
  UserModule.findByEmail(email, (err, user)=> {
    if(err) {return done(err);}
    if(!user) {return done(null, false);}
    if(!UserModule.verifyPassword(user, password)) {return done(null, false)}
    return done(null, user);
  });
}

const options = {
  usernameField: "username",
  passwordField: "password",
}

passport.use('local', new LocalStrategy(options, verify));

passport.serializeUser((user, cb)=> {
  cb(null, user.id);
});

passport.deserializeUser((id, cb)=> {
  UserModule.findByEmail(id, (err, user)=> {
    if(err) {return cb(err);}
    cb(null, user);
  })
})

const app = express();
app.use(session({secret: 'SECRET'}));
app.use(passport.initialize());
app.use(passport.session());

app.post('/signin', 
  passport.authenticate('local', {failureRedirect: '/Login'}), // - Кажется {failureRedirect: '/Login'} - не сработает
  async (req, res)=> {
    const {email, password} = req.params;
    const user = await UserModule.findByEmail(email);
    if(!user) { res.json({"error": "Неверный логин или пароль", "status": "error"})}
    const datas = {
      data: {
      id: user._id,
      email: user.email,
      name: user.name,
      contantPhone: user.contantPhone
      },
      status: 'ok'
    }
    res.json(datas);
  }
)

module.exports = router;