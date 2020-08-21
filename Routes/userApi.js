const express = require( 'express' );
const router = express.Router();
const bcrypt = require( 'bcryptjs' );
const jwt = require( 'jsonwebtoken' );
const User = require('../Models/user')
const { generateJwtToken,refreshJwtToken, generateRefreshToken, verifyToken} = require('../Middleware/modules')


//@route POST api/user/register
//@desc  POST Register User
//@ccess  Private




router.post( '/register', ( req, res ) => {
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

router.post( '/login',  ( req, res ) => {
    const { username, password } = req.body;
    if ( !username || !password  || username === '' || password === '') {
        res.status( 400 ).json( 'Please Enter All Fields'  );
    } else [
        User.findOne({username})
        .then(user => {
            if(!user){
                res.status( 400 ).json( 'Invalid Credentials'  );
            } else {
              

               bcrypt.compare(password, user.password)
               .then(isMatch => {
                   if(!isMatch){
                       res.status( 400 ).json(  'Invalid Credentials'  );
                   } else {
                       //Generate ReFresh Token and Save to DB
                       const refreshToken = generateRefreshToken()
                       if ( refreshToken ) {
                       user.refresh_token.value = refreshToken;
                       user.save();
                        //    console.log(req)
                       } else {
                           throw err;
                       }

                       //Generate Jwt
                        const token = generateJwtToken({id: user._id})
                           
                       if ( token ) {
                                res.json(token)
                            }else{
                                console.log('Token not generated')
                            }
                   
                       
                   }
               }).catch(err => res.json(err))
            }
        }).catch(err => res.json(err))
    ]
})


//@route POST api/user/refresh_token
//@desc  Refresh Tokens
//@access  Private

router.get( '/refresh_token', verifyToken, refreshJwtToken, ( req,res )=> {
    res.status(202).json('Token Generated Successfully')
} )





// const string = 'samA';
// var regex = /[A-Z]/g
// const isValid = regex.test(string)
// console.log(isValid)

module.exports = router;
