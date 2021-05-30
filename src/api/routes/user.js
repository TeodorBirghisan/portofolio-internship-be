const router = require('express').Router();
const db = require('../models');
const _ = require('lodash');
const passport = require('passport');
//TODO: add the line below as middleware for use of jwt auth
//passport.authenticate('jwt', { session: false }),
router.get('/:id', async (req, res) => {
  try {
    const { id } = _.get(req, 'params', null);
    const user = await db.User.findByPk(id);
    const userSkills = await db.Skill.findAll({ where: { userId: id } });
    const userAusbildung = await db.Ausbildung.findAll({
      where: { userId: id },
      include: db.Detail,
    });
    return res.status(200).json({ user, userSkills, userAusbildung });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
