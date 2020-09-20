const crypto = require('crypto')
const generateRSAkeys = () => {
    const key = crypto.createECDH('secp256k1');
key.generateKeys()
console.log(key.getPrivateKey().toString('base64'))
   
}

generateRSAkeys()

// module.exports = {generateRSAkeys};