const router = require('express').Router();
const db = require('../models');
const _ = require('lodash');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
  try {
    const { email, password } = _.get(req, 'body', null);
    const correctUser = await db.User.findOne({ where: { email } });
    if (!correctUser) {
      return res
        .status(400)
        .json({ message: 'Email does not exist', success: false });
    }
    if (correctUser.dataValues.password !== password) {
      return res
        .status(400)
        .json({ message: 'Password is incorrect', success: false });
    }
    const jwtToken = jwt.sign(
      {
        id: correctUser.dataValues.id,
        email: correctUser.dataValues.email,
      },
      process.env.SECRET
    );
    res.json({ message: 'Login successful', token: jwtToken, success: true });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
