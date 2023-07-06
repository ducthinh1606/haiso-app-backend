const fastify = require('fastify')();
const port = 3000;

const apiRoutes = [
  { prefix: 'auth', route: require('./routes/authRoutes') },
];

apiRoutes.forEach(({ prefix, route }) => {
  fastify.register(route, { prefix: `/api/${prefix}` });
});

fastify.listen(port, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server is listening on ${address}`);
});
