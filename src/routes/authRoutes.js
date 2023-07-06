const AuthController = require('../app/controllers/AuthController');

module.exports = function (fastify, opts, done) {
  const authController = new AuthController();

  fastify.post('/register', authController.register);
  done();
};
