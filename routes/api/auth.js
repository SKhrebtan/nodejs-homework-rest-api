const express = require('express');
const ctrl = require("../../controllers/auth");

const router = express.Router();

const { validates} = require("../../middlewares");

const { schemas } = require("../../models/user");

router.post("/register", validates.validateBody(schemas.registerSchema), ctrl.register);

router.post('/login', validates.validateBody(schemas.loginSchema), ctrl.login)

module.exports = router;