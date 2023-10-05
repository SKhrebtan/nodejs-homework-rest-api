const { User } = require("../../models/user");
const { ctrlWrapper } = require("../../helpers");

const updateSubscription  = async (req, res) => {
    const { subscription } = req.body;
    const { _id } = req.user;
      
    await User.findByIdAndUpdate(_id, { subscription});
    const user = await User.findById(_id)
    res.json({
        user: {
            email: user.email,
            subscription: user.subscription
        }
    })
}

module.exports = {
    updateSubscription: ctrlWrapper(updateSubscription)
}