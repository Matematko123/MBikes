const router = require('express').Router();
const User = require('../models/User');
const CryptoJs = require('crypto-js');
const JWT = require('jsonwebtoken');

router.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJs.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    !user && res.status(401).json('Wrong username');

    const hashedPass = CryptoJs.AES.decrypt(
      user.password,
      process.env.SECRET_KEY
    );

    const initialPassword = hashedPass.toString(CryptoJs.enc.Utf8);

    initialPassword !== req.body.password &&
      res.status(401).json('Wrong password');

    const accessToken = JWT.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: '3d' }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
