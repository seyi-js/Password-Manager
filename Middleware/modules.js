const crypto = require( 'crypto' )
const jwt = require( 'jsonwebtoken' );
const User = require('../Models/user')
const ag = 'aes-256-cbc'
// const key = "a4e1112f45e84f785358bb86ba750f48";//Secret Key
// console.log( key.toString('base64'))

if ( process.env.NODE_ENV !== 'production' ) {
    privateKey = require( '../keys' ).privateKey// This is For JWT TOKEN
    encryptionKey = require( '../keys' ).EncryptionKey//This is For Encryption
   
} else {
    privateKey = process.env.json_web_token_private_key;
    encryptionKey = process.env.EncryptionKey;
   
}

//Generate Encryption Key
const generatePrivateKey = () => {
    const key = crypto.createECDH('secp256k1');
key.generateKeys()
console.log(key.getPrivateKey().toString('base64'))
}

//Generate Password
const generatePassword = () => {
    const password = crypto.randomBytes( 32 )
    
    return password;
}

//Encrypt Data
const encryptData = ( data  ) => {
    let iv = crypto.pseudoRandomBytes(16)
    let cipher = crypto.createCipheriv( ag, Buffer.from(encryptionKey),iv );
    let encrypted = cipher.update(data );
    encrypted = Buffer.concat( [ encrypted, cipher.final() ] );
    
    return { iv:iv.toString('hex'), encryptedData: encrypted.toString( 'hex' ) };
}


//@desc Genarate Refresh Tokens
//@access  Private
const generateRefreshToken = () => {
    const key = crypto.createECDH('secp256k1');
    key.generateKeys()

    return  key.getPrivateKey().toString( 'base64' );
    // console.log(key.getPrivateKey().toString('base64'))
}


//@desc Genarate Json Web Tokens
//@access  Private
const generateJwtToken =({id}) => {
 const token =   jwt.sign(
        { id},
            `${privateKey}`,
     { expiresIn: 3600 } )
    
    return token;
}

//@desc Verify Json Web Tokens
//@access  Private
const verifyToken = ( req, res, next ) => {
    // const token = req.header( 'x-auth-token' );
    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmM2Y5Y2QzZmI4MTdiMTUxMDFkYzkyZiIsImlhdCI6MTU5ODI1NDMzMiwiZXhwIjoxNTk4MjU3OTMyfQ.CIRuuh5CLxDmBuTcCAWXYRKFPe4_i_V_KjohKuVUPfc"

    if ( !token ) {
        res.status( 401 ).status( 'No token, authorization denied' );
    } else {
        if ( token ) {
            try {
                const decoded = jwt.verify( token, privateKey);
                req.user = decoded;
                // decoded;
                // console.log( decoded )
                next();
            } catch ( e ) {
                // req.JWTerrorMessage = e.message;
                res.status( 403 ).json( 'Invalid Token' )
                
            }
        }
    }
}

//@desc Refresh Json Web Tokens
//@access  Private

//The Endpoint for this must have undergone 
//token verification before procceding to this one
const refreshJwtToken = ( req, res, next ) => {
   
    const { user } = req;

    if ( user ) {
        User.findOne( { _id: user.id } )
            .then( user => { 
                if ( !user ) {
                    res.status(401).json('Unathorized action detected')
                } else {
                    if ( !user.refresh_token.isRevoked && user.refresh_token.value ) {
                        //Regenerate New Token
                       
                        const token = generateJwtToken( { id: user._id } );
                        req.newToken = token;
                    
                        
                        next()
                    } else {
                        res.status(403).json('Forbidden Request')
                    }
                }
            } )
        .catch(err=> console.log(err))
    }

}

//@desc Verify if isAdmin
//@access  Private

const verifyAdmin = (req,res,next) => {
    const { user } = req
    
    if ( !user ) {
        res.status(400).json('Bad request')
    } else {
        User.findById( user.id )
            .then( user => {
                if ( user.isAdmin ) {
                    // console.log('true')
                    next();
                } else {
                    res.status(401).json('You are unauthorized to use this resource')
                }
            } )
        .catch(err=> console.log(err))
    }
}

//@desc find Current User
//@access  Private

const findUser = (req,res,next) => {
    const { user } = req;

    User.findById( user.id )
        .select( "-password" )
        .select("-generated_passwords")
        .select("-refresh_token")
        .then( user => {
            userDetails = user;
            next();
        })
        .catch( err => console.log( err ) );
}

//@desc Get Current User data
//@access  Private
const getUserData = (req,res,next) => {
    const { user } = req;

    User.findById( user.id )
        .populate("generated_passwords")
        .select( "-password" )
        .select("-refresh_token")
        .then( user => {
            userData = user;
            next();
        })
        .catch( err => console.log( err ) );
}



module.exports = {generateJwtToken,generatePassword,getUserData, encryptData, generateRefreshToken,findUser, verifyToken, refreshJwtToken, verifyAdmin}