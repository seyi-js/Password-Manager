const express = require( 'express' );
const router = express.Router();
const Password = require( '../Models/passwords' )
const {verifyToken, findUser, encryptData, generatePassword} = require('../Middleware/modules')

//@route POST api/user/new_data
//@desc  POST Add New Data
//@ccess  Private

router.post( '/', /*verifyToken, findUser,*/  ( req, res ) => {
    var { linked_account, username} = req.body;
    if ( !linked_account || !username ) {
        res.status( 400 ).json( 'Please enter all fields' );
    } else {
    const filteredAccount=  linked_account.replace( / /g, '' ) 
            .replace( /</g, '' )
            .replace( / > /g, '' )
            
    const filteredUsername=  linked_account.replace( / /g, '' ) 
            .replace( /</g, '' )
            .replace( / > /g, '' )
        
        if ( filteredAccount.length < 1 || filteredUsername.length < 1 ) {
            res.status(400).json('Please enter all fields')
        } else {
            //Generate New Password Here
            const password = generatePassword()
            // console.log( password.toString( 'base64' ) )
            const encryptedPassword = encryptData( password )
            console.log(encryptedPassword)
            // const newDetails = new Password( {
            //     linked_account:filteredAccount,
            //     username: filteredUsername,
                
            // })
        }
    }


})



module.exports = router;
