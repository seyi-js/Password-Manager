const { generateKeyPair } = require('crypto');

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

// main().then((r)=> console.log(r))






const pub ='-----BEGIN PUBLIC KEY-----\r\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA4OD+HW0vhe80GumG6jds5EOQLeiiE2mQk0CraiPOfgQNMPFXWuCMzFJTN4oP/uiQtz75gVzPkKPJlWt87d6ckI3xMBFDj74AAukngsIXU3P76Vth9lxgri8jlOSXW6aSBrQwzCsslRcwxZeukDiKjvNkLfWWO+ci2Lls9vM7VZduM3NABANY/Pci1j7kvwk9p0ITpYFG6lmFk5s0yQKK7kAW6PNORCC1mnIVt4qAWDmY0NWC6L5mJwWwgJox+GIObmzU4BRBxFtyOND4NaPuS+iRinPuDZ37/xdKOxbHTXMvrs3D7/7aomLSnE/z7cnT5Bp9uyOPZjD3x23IYMvatvu+AT3v4r9ehVnZ48HQ2d+oUbbA96CT7PhnLnTBxzVPSqifhJEulbNjrOc067gDMEtB0t/VsZ+e/Qn7rIPhLssSLJEGiXh0mU4WWHwnJAQYRAAIXcoJYK5TfHNK0eQR7PoGAmPRFDkLY0cFFdzNeIrnHqdf7XFqVJaPPJH+hjclm1eQCuIPErfWwcWSiz/NYjooHdxfXnAWtqlvnM+JrNUjLlnW+fVVyPFmyYOM+TfIKgY+LrX3kgkZgn0aJ9XaukiCB2KsrrzJvlhOPPx4wf5RC4HQdDFKho7Tw782Yc+2i3vWgxrjn/F/IsJyrP++C0DreCsbwksr/hR+vR3MIPkCAwEAAQ==\r\n-----END PUBLIC KEY-----\r\n'

const pr= '-----BEGIN RSA PRIVATE KEY-----\r\n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\r\n-----END RSA PRIVATE KEY-----\r\n'

const crypto =require('crypto')

const dec =()=>{
    generateKeyPair('rsa', {
        modulusLength: 4096,
        publicKeyEncoding: {
          type: 'spki',
          format: 'pem'
        },
        privateKeyEncoding: {
          type: 'pkcs8',
          format: 'pem',
          cipher: 'aes-256-cbc',
          passphrase: 'top secret'
        }
      }, (err, publicKey, privateKey) => {
        // Handle errors and use the generated key pair.
        // console.log( publicKey.toString('base64') )
                // console.log( privateKey.toString('base64') )
                
                function encrypt(toEncrypt) {
                   
                    
                    const buffer = Buffer.from(toEncrypt, 'utf8')
                    const encrypted = crypto.publicEncrypt(pub, buffer)
                    console.log(encrypted.toString('base64'))
                    return encrypted.toString('base64')
                  }

                //   encrypt('how are you')
                  
                  function decrypt() {
                    
                    const buffer = Buffer.from(encrypt('how are you'), 'base64')
                    const decrypted = crypto.privateDecrypt(
                      {
                        key: pr.toString(),
                        passphrase: '',
                      },
                      buffer,
                    )

                    // console.log(decrypted)
                    return decrypted.toString('utf8')
                  }

                  console.log(decrypt())
      });
}
 

dec()