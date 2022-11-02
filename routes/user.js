const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.get("/", async ( req, res ) => {
    const user = await User.create({name: "Leonardo", lastname: "Guanuco", email: "Corr", password: "12345" })
    await user.save();
    console.log(user)
})

module.exports = router;