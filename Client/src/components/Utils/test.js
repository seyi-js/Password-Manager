const Crypto = require( 'crypto' );

let password = "hello world";
let salt = "salty salt";
let iterations = 100100;
let keylength = 32;
let interval_handle = null;
let Fkey = null;
let buffer = Array();
let key_object = {};

console.log( 'Creating key: ', new Date().getTime() )

var t1, t2;

t1 = new Date().getTime();

function createKey(k_object ) {

    if ( !k_object ) {
        throw new Error( "k_object is not a valid object." );
    }

    Crypto.pbkdf2( password, salt, iterations, keylength, null, function ( err, key ) {
    
        k_object['key'] = key;
        
        console.log( 'Inside callback: ', new Date().getTime() );
    
        t2 = new Date().getTime();
    
        console.log( `Took ${t2 - t1} millisecond(s).` );
    
        // console.log( 'key: ', key );
    } ); 
}

function checkKey() {

    if ( key_object['key'] ) {
        console.log( 'Key has been generated: ', key_object);
        continueProcessing();
        clearInterval( interval_handle );

    }
    else {
        console.log( 'Key has not been generated: ',key_object);
    }
    return true;
}

function continueProcessing() {
    console.log( 'Processing continued.' );
    console.log( 'Key Created: ', new Date().getTime() );

}

createKey(key_object);

interval_handle = setInterval( checkKey, 100 );

console.log( 'Exiting...' );

// function sleep(milliseconds ) {
    
//     var start, stop,now;

//     start = new Date().getTime();
//     stop = new Date().getTime() + milliseconds;
//     while ( true ) {
        
//         now = new Date().getTime();

//         if ( now >= stop ) {
//             break;
//         }

//     }
// }
// t1 = new Date().getTime();

// sleep( 2000 );

// t2 = new Date().getTime();

// console.log( `Took ${t2 - t1} millisecond(s).` );
