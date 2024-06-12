const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");

const userContoroller = require("../controllers/users.js");

router.route("/signup")
    .get(userContoroller.renderSignUpForm)
    .post(wrapAsync(userContoroller.signup));

router.route("/login")
    .get(userContoroller.renderLoginForm)
    .post( 
    saveRedirectUrl,    
    passport.authenticate("local",{
        failureRedirect: "/login",
        failureFlash : true
    }), 
    userContoroller.login
);

router.get("/logout", userContoroller.logout);




module.exports = router;