const express = require('express');
const argon2 = require('argon2');
const router = express.Router();
const UserModule = require('../models/users');

router.post('/create', async(req, res)=> {
  const { email, password, name, contactPhone } = req.params;
  const passwordHash = await argon2.hash(password);
  const newUser = new UserModule(email, passwordHash, name, contactPhone);
  try{
    await newUser.save();
    res.json(newUser);
  }catch (e) {res.status(500).json(e)}
})