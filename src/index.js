const app = require('express')();
require('dotenv').config();

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  try {
    console.log(`Listening on port ${port}`);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
});
