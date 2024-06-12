const mongoose = require("mongoose");
const initData = require ("./data.js");
// const {connectToMongoDB} = require("../connection.js");
const Listing = require("../models/listing");
const MONGO_URL = "mongodb://localhost:27017/wanderlust";


 main()   
    .then((result) => {
        console.log("DB connected")
    }).catch((err) => {
        console.log("DB not connected", err)
    });

async function main(){
    await mongoose.connect(MONGO_URL);
}


const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({
        ...obj, 
        owner : "6665264c8f923d1d97b7fc3d",
        category : (function() {
            const categories = ["Rooms", "Iconic cities", "Mountains", "Castles", "Amazing pools", "Camping", "Farms", "Arctic", "Domes", "Boats"];
            return categories[Math.floor(Math.random() * categories.length)];
          })(),
    }));


    await Listing.insertMany(initData.data);
    console.log("data was initalized");
}

initDB();