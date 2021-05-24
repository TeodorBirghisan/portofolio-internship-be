const app = require('express')();
const cors = require('cors');
const express = require('express');
require('dotenv').config();
const routes = require('./api/routes');
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

routes(app);

app.listen(port, async () => {
  try {
    console.log(`Listening on port ${port}`);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
});
