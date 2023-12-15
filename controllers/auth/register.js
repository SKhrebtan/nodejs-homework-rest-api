const bcrypt = require('bcrypt');
const gravatar = require("gravatar");
const { User } = require("../../models/user");
const { ctrlWrapper, HttpError, sendMailSG, sendMailNM } = require("../../helpers");
const { nanoid } = require('nanoid')
require('dotenv').config();

const { BASE_URL } = process.env;

const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw HttpError(409, "Email already exists")
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);
    const verificationToken = nanoid();
    const newUser = await User.create({ ...req.body, password: hashPassword, avatarURL, verificationToken });

    // const verifyEmail = { 
    //     to: email,
    //     from: "shrebtan@meta.ua",
    //     subject: "Verify email",
    //     html: `<a target="_blank" href="${BASE_URL}/api/auth/users/verify/${verificationToken}">Click to verify email</a>`
    // }

    // await sendMailNM.sendMail(verifyEmail)
    
      const verifyEmail = { 
        to: email,
        subject: "Verify email",
        html: `<a target="_blank" href="${BASE_URL}/api/auth/users/verify/${verificationToken}">Click to verify email</a>`
    }

        await sendMailSG(verifyEmail)

    res.status(201).json({
        user: {
            email: newUser.email,
            subscription: newUser.subscription,
        }
    })
}


module.exports = {
    register: ctrlWrapper(register)
}