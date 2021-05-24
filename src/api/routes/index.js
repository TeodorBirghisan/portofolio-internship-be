const userRouter = require('./user');
const registerRouter = require('./register');
module.exports = (app) => {
  app.use('/user', userRouter);
  app.use(registerRouter);
};
