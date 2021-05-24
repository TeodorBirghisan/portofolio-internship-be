const app = require('express')();
const cors = require('cors');
require('dotenv').config();
const db = require('./api/models');
const port = process.env.PORT || 3000;

app.use(cors());

app.listen(port, async () => {
  try {
    console.log(`Listening on port ${port}`);
    //console.log(await db.Skill.findAll({ where: { userId: 1 } }));
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
});
