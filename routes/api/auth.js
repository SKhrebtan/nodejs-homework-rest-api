const express = require('express');
const ctrl = require("../../controllers/auth");

const router = express.Router();

const { validates, authenticate} = require("../../middlewares");

const { schemas } = require("../../models/user");

router.post("/register", validates.validateBody(schemas.registerSchema), ctrl.register);

router.post('/login', validates.validateBody(schemas.loginSchema), ctrl.login)

router.get('/current', authenticate, ctrl.getCurrent);

router.post('/logout', authenticate, ctrl.logout);

router.patch('/users', authenticate, ctrl.updateSubscription)

module.exports = router;