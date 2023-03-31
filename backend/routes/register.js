const { getData } = require("../controllers/userController");

const userRoutes = (app) => {
  app.post("/api/register", function getData(req, res) {
    console.log("RESPONSE", res.body);
  });
};

module.exports = { userRoutes };
