const express = require('express');
const ctrl = require("../../controllers/auth");

const router = express.Router();

const { validates, authenticate, upload} = require("../../middlewares");

const { schemas } = require("../../models/user");

router.post("/register", validates.validateBody(schemas.registerSchema), ctrl.register);

router.get("/users/verify/:verificationToken", ctrl.verifyEmail);

router.post("/users/verify", validates.validateBody(schemas.emailSchema), ctrl.resendVerification)

router.post('/login', validates.validateBody(schemas.loginSchema), ctrl.login);

router.get('/current', authenticate, ctrl.getCurrent);

router.post('/logout', authenticate, ctrl.logout);

router.patch('/users', authenticate, ctrl.updateSubscription);

router.patch('/users/avatars', authenticate, upload.single("avatar"), ctrl.updateAvatar)

module.exports = router;