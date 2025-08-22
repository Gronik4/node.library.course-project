const express = require('express');
const router = express.Router();
const UserModule = require('../models/users');

router.post('/signup', async (req, res)=> {
  const {email} = req.params;
  const user = await UserModule.findByEmail(email);
  if(!user) {res.json({"error": "email занят", "status": "error"});}
  
  res.json()
})