const validates = require("./validateBody");
const isValidId = require("./isValidId");
const authenticate = require("./authenticate")

module.exports = {
    validates,
    isValidId,
    authenticate,
}