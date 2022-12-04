const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String, 
        unique: true 
    },
    password:{
        type: String,
        unique: false
    }
})

module.exports = mongoose.model("Users", userSchema);