const mongoose = require( 'mongoose' );
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema( {
    username: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true
    },

    generated_passwords: [ {
        type: ObjectId,
        ref: 'passwords'
    } ],
    refresh_token: {
        user_agents: [],
        value: {
            type:String
        },
        isRevoked:{
            type: Boolean,
            default: false,
        }
    },
    
    last_login: {
        type: Date,
        default: Date.now()
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
} );


const User = mongoose.model( 'users', userSchema );

module.exports = User;