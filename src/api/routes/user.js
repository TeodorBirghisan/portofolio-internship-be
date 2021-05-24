const router = require('express').Router();
const db = require('../models');
const _ = require('lodash');
router.get('/:id', async (req, res) => {
  try {
    const { id } = _.get(req, 'params', null);
    const user = await db.User.findByPk(id);
    const userSkills = await db.Skill.findOne({ where: { userId: id } });
    const userAusbildung = await db.Ausbildung.findAll({
      where: { userId: id },
    });
    //TODO: a user has many ausbildungs -> a detail has n ausbildungsId-> getAll details for the different ausbildungs that a user has
    //const ausbildungId = userAusbildung.dataValues.id;
    //const userDetail = await db.Detail.findOne({ where: { ausbildungId } });
    return res.status(200).json({ user, userSkills, userAusbildung });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
