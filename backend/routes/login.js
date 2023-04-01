const { validateUser } = require("../controllers/loginController");

const loginRoutes = (app) => {
  app.post("/api/login", validateUser);
};

module.exports = { loginRoutes };
