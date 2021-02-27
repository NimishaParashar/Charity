const express = require("express");
const router = express.Router();
const usersController = require("../app/controllers/usersControllers");
const charityController = require('../app/controllers/charityControllers')
const { authenticateUser } = require("../app/middlewares/authentication");

router.post("/users/register", usersController.create);
router.post("/users/login", usersController.createToken);
router.delete("/users/logout", authenticateUser, usersController.destroy);
router.get("/users/account", authenticateUser, usersController.show);

router.get('/charities', charityController.list);
router.post('/charities', charityController.create)
module.exports = router;
