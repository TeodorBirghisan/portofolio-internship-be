const router = require('express').Router();
const db = require('../models');
const _ = require('lodash');
router.post('/register', async (req, res) => {
  try {
    const {
      lastName,
      firstName,
      email,
      age,
      occupation,
      telephone,
      address,
      password,
      hobby,
    } = _.get(req, 'body', null);

    const existingUser = await db.User.findOne({ where: { email: email } });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: 'This email is already registered' });
    }

    const newUser = await db.User.create({
      lastName,
      firstName,
      email,
      age,
      occupation,
      telephone,
      address,
      password,
      hobby,
    });

    if (newUser) {
      res.status(200).json({ message: 'Registered successful' });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
