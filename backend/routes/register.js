const { createUser } = require("../controllers/userController");

const userRoutes = (app) => {
  app.post("/api/register", function createUser(req, res) {
    console.log("RESPONSE", res.body);
  });
};

module.exports = { userRoutes };
