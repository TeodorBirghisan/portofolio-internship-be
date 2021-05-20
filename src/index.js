const app = require('express')();

const port = 8080;

app.listen(port, async () => {
  try {
    console.log(`Listening on port ${port}`);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
});
