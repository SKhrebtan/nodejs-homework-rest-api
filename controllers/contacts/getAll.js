const { Contact } = require("../../models/contact");
const { ctrlWrapper } = require("../../helpers");

const getAll = async (req, res) => {
    const { _id: owner } = req.user; 
    const { page = 1, limit = 10 } = req.query;
    const { favorite } = req.query;
    const skip = (page - 1) * limit;
    console.log(favorite)
    if (favorite) {
        const result = await Contact.find({ owner, favorite}, "", { skip, limit });
        res.json(result);
    } else {
        const result = await Contact.find({ owner}, "", { skip, limit });
        res.json(result);
    }
    }
  
module.exports = {
    getAll: ctrlWrapper(getAll)
}