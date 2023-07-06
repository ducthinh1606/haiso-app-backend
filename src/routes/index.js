const fastify = require('fastify')();

const apiRoutes = [
  { prefix: 'auth', route: require('./authRoutes') },
];

apiRoutes.forEach(({ prefix, route }) => {
  fastify.register(route, { prefix: `/api/${prefix}` });
});

module.exports = fastify;
