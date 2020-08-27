const express = require( 'express' );
const router = express.Router();
const bcrypt = require( 'bcryptjs' );
const jwt = require( 'jsonwebtoken' );
const User = require('../Models/user')
const { generateJwtToken,refreshJwtToken,verifyAdmin,findUser, generateRefreshToken, verifyToken} = require('../Middleware/modules')


//@route POST api/user/register
//@desc  POST Register User
//@ccess  Admin




router.post( '/register', verifyToken,verifyAdmin, ( req, res ) => {
    const { username, password, isAdmin=false } = req.body;

    if ( username === '' ||!username || password === '' || !password ) {
        res.status( 400 ).json( 'Please Enter all Fields' )
    } else {
        User.findOne( { username } )
            .then( user => {

                if ( user ) {
                    res.status( 400 ).json( 'Choose a different Username' );
                } else {
                    const newUser = new User( {
                        username,
                        password,
                        isAdmin
                    } );

                    bcrypt.genSalt( 10, ( err, salt ) => {
                        if ( err ) {
                            console.log( err )
                        } else {
                            bcrypt.hash( newUser.password, salt, ( err, hash ) => {
                                if ( err ) {
                                    console.log(err)
                                } else {
                                    newUser.password = hash;
                                    newUser.save()
                                        .then( user => {
                                            res.status(200).json('User Registered successfully')
                                        } )
                                        .catch(err=> console.log(`error from saving password ${err}`))
                                }
                            })
                        }
                             
                        
                    } )
                }
            } )
            .catch( err => console.log( `Error From Username Registration Verification ${ err }` ) )
    }

    
} );


//@route POST api/user/login
//@desc  Login Users
//@ccess  Public

router.post( '/login', ( req, res ) => {
    const { username, password } = req.body;
    if ( !username || !password || username === '' || password === '' ) {
        res.status( 400 ).json( 'Please Enter All Fields' );
    } else[
        User.findOne( { username } )
            .then( user => {
                if ( !user ) {
                    res.status( 400 ).json( 'Invalid Credentials' );
                } else {
              

                    bcrypt.compare( password, user.password )
                        .then( isMatch => {
                            if ( !isMatch ) {
                                res.status( 400 ).json( 'Invalid Credentials' );
                            } else {
                                //Generate ReFresh Token and Save to DB
                                const refreshToken = generateRefreshToken()
                                if ( refreshToken ) {
                                    user.refresh_token.value = refreshToken;
                                    user.refresh_token.isRevoked = false;
                                    user.save();
                                    //    console.log(req)
                                } else {
                                    throw err;
                                }

                                //Generate Jwt
                                const token = generateJwtToken( { id: user._id } )
                           
                                if ( token ) {
                                    res.json( token )
                                } else {
                                    console.log( 'Token not generated' )
                                }
                   
                       
                            }
                        } ).catch( err => res.json( err ) )
                }
            } ).catch( err => res.json( err ) )
    ]
} );


//@route POST api/user/refresh_token
//@desc  Refresh Tokens
//@access  Private

router.get( '/refresh_token', verifyToken, refreshJwtToken, ( req, res ) => {
    res.status( 202 ).json( req.newToken )
} );

//@route POST api/user/reset_password
//@desc  Reset Password
//@access  Private

router.put( '/reset_password', verifyToken, findUser, ( req, res ) => {
    const { password, password2 } = req.body;

    if ( !password || !password2 ) {
        res.status( 400 ).json( 'Enter all fields' );
    } else if ( password !== password2 ) {
        res.status( 400 ).json( 'Password not equal' )
    } else {
        //Hash Password
        bcrypt.genSalt( 10, ( err, salt ) => {
            bcrypt.hash( password, salt, ( err, hash ) => {
                if ( err ) console.log( err );
                userDetails.password = hash;
                userDetails.save();
                res.status( 200 ).json( 'Password Changed' );
            } );
        } );
    }
} );

//@route POST api/user/revoke
//@desc  Revoke Refesh Token
//@access  Admin

router.put( '/revoke', verifyToken, verifyAdmin, ( req, res ) => {
    const { id } = req.body;//The id of user to be Revoked
    if ( id ) {
        User.findById( id )
            .then( user => { 
                user.refresh_token.isRevoked = true;
                user.refresh_token.value = null;
                user.save();
                res.status( 200 ).json( 'Revoked' );
            } )
            .catch( err => res.status( 500 ).json( 'Internal Server Error' ) );
    } else {
        res.status(400).json('Invalid User Id')
    }
        
})



// const string = 'samA';
// var regex = /[A-Z]/g
// const isValid = regex.test(string)
// console.log(isValid)

module.exports = router;
