const mongoose = require("mongoose");

const connecttomongo = async() =>{
    mongoose.connect("mongodb://localhost/tsp",{useNewUrlParser: true,useUnifiedTopology:true});
}

module.exports = connecttomongo;