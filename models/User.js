 // MLL - have to add fields for the different auths 
 var mongoose = require('mongoose');
 
 module.exports = mongoose.model('User', {
     email            : String, 
    local            : {
        password     : String
    },
    facebook         : {
        id           : String,
        token        : String,
        name         : String
    },
    linkedin         : {
        id           : String,
        displayName  : String
    }          
                
                
                
                // id: String, 
                 //access_token: String, 
                 //username: String,
                 //password: String,
                // firstName: String,
                // lastName: String,
                // email: String, 
                // access_token: String,
 });