// const { generateKeyPair } = require('crypto');
// generateKeyPair('rsa', {
//   modulusLength: 4096,
//   publicKeyEncoding: {
//     type: 'spki',
//     format: 'pem'
//   },
//   privateKeyEncoding: {
//     type: 'pkcs8',
//     format: 'pem',
//     cipher: 'aes-256-cbc',
//     passphrase: 'top secret'
//   }
// }, (err, publicKey, privateKey) => {
//   // Handle errors and use the generated key pair.
//   console.log( publicKey.toString('base64') )
//           console.log( privateKey.toString('base64') )
// });

const Crypto = require('hybrid-crypto-js');

const Crypt = Crypto.Crypt;

const RSA = Crypto.RSA;

var rsa = new RSA();

// Generate RSA key pair, default key size is 4096 bit
var publicKey;
var privateKey;
async function main() {
    await rsa.generateKeyPairAsync().then(
        async function ( keyPair ) {
            var publicKey = keyPair.publicKey;
            var privateKey = keyPair.privateKey;
            console.log( publicKey,privateKey );
        } );
    
    console.log( "done with keys generation." );

    return 1;
    
}

var counter = 0;

main().then((r)=> console.log(r))


'-----BEGIN RSA PRIVATE KEY-----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-----END RSA PRIVATE KEY-----'