const express = require("express");
const { newUser, compareToken, loginUser } = require("../controllers/user");
const { postNewUser, postValidateToken, postLogin } = require("../middlewares/user");

const router = express.Router();

router.post ( "/new-user", postNewUser, newUser )

router.post( "/validate-token", postValidateToken, compareToken )

router.post( "/login", postLogin, loginUser )

module.exports = router;