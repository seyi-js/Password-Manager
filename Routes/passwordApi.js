const express = require( 'express' );
const router = express.Router();
const Password = require( '../Models/passwords' )
const {verifyToken,getUserData, findUser, encryptData, generatePassword} = require('../Middleware/modules')

//@route POST api/data/add
//@desc  POST Add New Data
//@ccess  Private

router.post( '/add', verifyToken, findUser, ( req, res ) => {
    var { linked_account, username } = req.body;
    if ( !linked_account || !username ) {
        res.status( 400 ).json( 'Please enter all fields' );
    } else {
        const filteredAccount = linked_account.replace( / /g, '' )
            .replace( /</g, '' )
            .replace( / > /g, '' )
            
        const filteredUsername = username.replace( / /g, '' )
            .replace( /</g, '' )
            .replace( / > /g, '' )
        
        if ( filteredAccount.length < 1 || filteredUsername.length < 1 ) {
            res.status( 400 ).json( 'Please enter all fields' )
        } else {
            //Generate New Password Here
            const password = generatePassword()
            const encryptedPassword = encryptData( password )
            const encryptedUsername = encryptData( filteredUsername )
            
            const newDetails = new Password( {
                password_linked_account: filteredAccount,
                
                
            } );

            Password.create( newDetails )
                .then( data => {
                    data.username.iv = encryptedUsername.iv;
                    data.username.cipherText = encryptedUsername.encryptedData;
                    data.password.iv = encryptedPassword.iv;
                    data.password.cipherText = encryptedPassword.encryptedData;
                    data.save();

                    //Push the id into the current user details
                    userDetails.generated_passwords.push( data._id );
                    userDetails.save();
                    res.status( 200 ).json( 'Data Created' )
                } )
                .catch( err => console.log( err ) )
        }
    }


} );


//@route Delete api/data/delete/:id
//@desc  Delete Delete Data
//@ccess  Private

router.delete( '/delete/:id',verifyToken, findUser, ( req, res ) => {
    const { id } = req.params;
    
    

    var FoundData;

    //Find if the passed in id belongs to the user
    for ( i = 0; i < userDetails.generated_passwords.length; i++ ){
       
        if ( userDetails.generated_passwords[ i ] == id ) {
            FoundData = id;
        } 
    }


    
    if(!FoundData){
        res.json(401).json('Authorization Denied')
    } else {
        Password.findById( FoundData )
            .then( data => { 
                data.remove();
                res.status(200).json(FoundData)
            } )
            .catch( err => {
                console.log( err );
                res.status(500).json('Data not Found')
            } );
        
    }
} );


//@route GET api/data
//@desc  GET Get all Data
//@ccess  Private

router.get( '/', verifyToken,getUserData, ( req, res ) => {
    res.status( 200 ).json( userData.generated_passwords );
})

module.exports = router;
