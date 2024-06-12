const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingContorller = require("../controllers/listings.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});


router.route("/")
    .get(wrapAsync(listingContorller.index))
    .post(isLoggedIn, upload.single('listing[image]'),wrapAsync(listingContorller.createListing),validateListing);


router.get("/new",isLoggedIn, listingContorller.renderNewForm);

router.get("/search", wrapAsync(listingContorller.search));

router.route("/:id")
    .get(wrapAsync(listingContorller.showListing))
    .put(isLoggedIn, isOwner, upload.single('listing[image]'),validateListing, wrapAsync(listingContorller.updateListing))
    .delete(isLoggedIn, isOwner, wrapAsync(listingContorller.destroyListing));

router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingContorller.renderEditForm));


module.exports = router;

