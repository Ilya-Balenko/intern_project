const express = require('express');
const app = express();

const usersRoutes = require('./routes/usersRoutes');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());
app.use('/users', usersRoutes);
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});