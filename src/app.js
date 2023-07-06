const express = require('express');
const app = express();
const port = 3000;

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.listen(port, async () => {
  console.log(`Server is listening on port ${port}`);
});
