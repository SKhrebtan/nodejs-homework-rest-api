const validates = require("./validateBody");
const isValidId = require("./isValidId");
const authenticate = require("./authenticate")
const upload = require("./upload");

module.exports = {
    validates,
    isValidId,
    authenticate,
    upload,
}