const { ctrlWrapper } = require("../../helpers");
const path = require('path');
// const fs = require("fs/promises");
const { User } = require("../../models/user");
const jimp = require("jimp");

const avatarsDir = path.join(__dirname, "../", "../", "public", "avatars")

const updateAvatar = async (req, res) => {
    const { _id } = req.user
    const { path: tempUpload, originalname } = req.file;
    const filename = `${_id}_${originalname}`;
    const resultUpload = path.join(avatarsDir, filename);
    // await fs.rename(tempUpload, resultUpload);
    const avatarURL = ("avatars", filename);
    await User.findByIdAndUpdate(_id, { avatarURL });
    // const image = await jimp.read(resultUpload);
     const image = await jimp.read(tempUpload);
    await image.resize(250, 250, jimp.HORIZONTAL_ALIGN_CENTER);
    await image.writeAsync(resultUpload);

    res.json({
        avatarURL,
    })
}

module.exports = {
    updateAvatar: ctrlWrapper(updateAvatar)
}