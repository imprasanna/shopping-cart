const { createUser } = require("../controllers/userController");

const userRoutes = (app) => {
  app.post("/api/register", createUser);
};

module.exports = { userRoutes };
