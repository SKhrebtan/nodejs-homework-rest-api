const login = require("./login");
const register = require("./register");
const getCurrent = require("./current");
const logout = require("./logout");
const updateSubscription = require('./updateSubscription');
const updateAvatar = require('./updateAvatar')
const verifyEmail = require('./verifyEmail')
const resendVerification = require('./resendVerification')

module.exports = {
    ...login,
    ...register,
    ...getCurrent,
    ...logout,
    ...updateSubscription,
    ...updateAvatar,
    ...verifyEmail,
    ...resendVerification,
   }