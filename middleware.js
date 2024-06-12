const Listing =  require("./models/listing.js");
const Review = require("./models/review.js")
const ExpressError = require("./utils/ExpressError");
const {listingSchema, reviewSchema} =require("./schema.js");

module.exports.isLoggedIn = (req,res,next)=>{
    //console.log();
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl; 
        req.flash("error","you must be logged-in ");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async (req,res,next)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash("error", "You are no the owner of this listing")
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.validateListing = (req,res,next)=>{
    console.log(req.body);
    const {error} = listingSchema.validate(req.body);
    //const errMsg = error.details.map((el)=> el.message).join(",")
    if(error){
        throw new ExpressError(400,error);
    }
    else{
        next();
    }
}

module.exports.validateReview = (req,res,next)=>{
    const {error} = reviewSchema.validate(req.body);
    //const errMsg = error.details.map((el)=> el.message).join(",")
    if(error){
        throw new ExpressError(400,error);
    }
    else{
        next();
    }
}

module.exports.isreviewAuthor = async (req,res,next)=>{
    let {id, reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error", "You did not created this review")
        return res.redirect(`/listings/${id}`);
    }
    next();
}