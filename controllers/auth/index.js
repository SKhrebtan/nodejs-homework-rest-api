const login = require("./login");
const register = require("./register");
const getCurrent = require("./current");
const logout = require("./logout");
const updateSubscription = require('./updateSubscription')

module.exports = {
    ...login,
    ...register,
    ...getCurrent,
    ...logout,
    ...updateSubscription,
   }