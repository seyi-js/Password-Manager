const mongoose = require( 'mongoose' );

const passwordSchema = new mongoose.Schema( {
    password_linked_account: {
        type: String,
        required: true
    },

    username: {
        iv: String,
        cipherText:String
    },

    password: {
        iv: String,
        cipherText:String
    }
} );

const Password = mongoose.model( 'passwords', passwordSchema );

module.exports = Password;