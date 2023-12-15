const { User } = require("../../models/user");
const { ctrlWrapper, HttpError, sendMailSG } = require("../../helpers");
require('dotenv').config();

const { BASE_URL } = process.env;

const resendVerification = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email })
    
    if (!user) {
        HttpError(401, "Email not found")
    }
    if (user.verify) {
        HttpError(400, "Verification has already been passed")
    }
     const verifyEmail = { 
        to: email,
        subject: "Verify email",
        html: `<a target="_blank" href="${BASE_URL}/api/auth/users/verify/${user.verificationToken}">Click to verify email</a>`
    }

    await sendMailSG(verifyEmail);
    
    res.json({
        message: "Verification email sent"
    })

}

module.exports = {
    resendVerification: ctrlWrapper(resendVerification),
}