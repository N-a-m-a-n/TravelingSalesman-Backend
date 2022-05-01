const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    username:{
        type: String,
    },
    password: {
        type: String,
        // required: true
    },
})

userSchema.index({name: 1, email: 1, username: 1});

module.exports = mongoose.model('users',userSchema);


