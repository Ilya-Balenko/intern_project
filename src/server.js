const express = require("express");
require("dotenv").config();
const app = express();
const usersRouter = require('./routes/users');
app.use(require('./middleware/errorHandler'));

app.use(express.json());
app.use('/users', usersRouter);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Serveris strādā: http://localhost:${PORT}`));
}

module.exports = app;