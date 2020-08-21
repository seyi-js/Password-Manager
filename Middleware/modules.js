
const crypto = require( 'crypto' )
const jwt = require( 'jsonwebtoken' );


//Generate Encryption Key
const generatePrivateKey = () => {
    const key = crypto.createECDH('secp256k1');
key.generateKeys()
console.log(key.getPrivateKey().toString('base64'))
}


const generateRefreshToken = () => {
    const key = crypto.createECDH('secp256k1');
    key.generateKeys()

    return  key.getPrivateKey().toString( 'base64' );
    // console.log(key.getPrivateKey().toString('base64'))
}


const privateKey = process.env.json_web_toke_private_key || 'wcQu9WkbZwj4n4e1UPQlK6xUvVg4jTZupxm9K4IB6iw='

const generateToken =({id}) => {
 const token =   jwt.sign(
        { id},
            `${privateKey}`,
     { expiresIn: 3600 } )
    
    return token;
}

const verifyToken = ( req, res, next ) => {
    const token = req.header( 'x-auth-token' );

    if ( !token ) {
        res.status( 401 ).status( 'No token, authorization denied' );
    } else {
        if ( token ) {
            try {
                const decoded = jwt.verify( token, process.env.SESSION_SECRET );
                req.user = decoded;
                // console.log( decoded )
                next();
            } catch ( e ) {
                res.status( 403 ).json('Ivalid Token' )
            }
        }
    }
}

module.exports = {generateToken, generateRefreshToken}