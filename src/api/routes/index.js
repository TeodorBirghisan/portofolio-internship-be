const userRouter = require('./user');
const registerRouter = require('./register');
const loginRouter = require('./login');
module.exports = (app) => {
  app.use('/user', userRouter);
  app.use(registerRouter);
  app.use(loginRouter);
};
