const mongoose = require( 'mongoose' );

const passwordSchema = new mongoose.Schema( {
    password_linked_account: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
} );

const Password = mongoose.model( 'passwords', passwordSchema );

module.exports = Password