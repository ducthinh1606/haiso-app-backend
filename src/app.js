const port = 3000;

const fastify = require('./routes');

fastify.listen(port, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server is listening on ${address}`);
});
