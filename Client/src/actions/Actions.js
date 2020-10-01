import {
    LOAD_DATA, DELETE_DATA, ADD_DATA,
    GET_SHARE_REQUEST, UPDATE_FAVOURITES, LOGIN_FAIL,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    CLEAR,
    REGISTER_SUCCESS
} from './types';
import { generateENK,generateRandomChars,encryptUserData} from '../components/Utils/Utils'
import Axios from 'axios'


const config = {
    headers: {
        "Content-Type": "application/json"
    }
}

export const deleteFromUI= (id)=>(dispatch)=>{
    dispatch({
        type:DELETE_DATA,
        payload:id
    })
}

export const addData =(data)=>dispatch=>{
    dispatch({
        type:ADD_DATA,
        payload:data

    })
}


export const updateFav=(data)=>dispatch=>{
if(data.fav ){
    data.fav=false;
}else{
    data.fav=true
}
    
    

    dispatch({
        type:UPDATE_FAVOURITES,
        payload:data
    })
}

export const clearData = () => dispatch => {
    dispatch( {
        type:CLEAR,
    })
}

// const  createKey=({Key,pass,salt,keyLen,iteration})=> {

//     if ( !Key ) {
//         throw new Error( "k_object is not a valid object." );
//     }

    
    
    
//     //Generate Vault Key
//      generateENK( { pass, keyLen, salt, iteration ,Key} );
    
    

// }



//Register a User
export const registerRoute=(data)=>dispatch=>{
    let pass = data.password;
    let salt = data.email;
    let keyLen = 32;
    let iteration = 100100;
    let Key = {};
    let vaultKey;
    let RKey;
    let loginHash;
    let encryptedVaultKey;

    generateENK( {Key,pass,salt,keyLen,iteration });
    

const checkKey =()=> {
    if ( Key['key'] && !vaultKey) {
        // console.log( 'Key has been generated: ', vaultKey);
        
        vaultKey = Key[ 'key' ];
        Key = {};

        //Generate RKey here
       
        salt = generateRandomChars();
        pass = generateRandomChars();
        generateENK( { Key, pass, salt, keyLen, iteration } );
       
        
    } else if ( Key[ 'key' ] && vaultKey && !RKey ) {
        
        RKey = Key[ 'key' ];
        Key = {};
        //Generate Login Hash Here
       
        iteration = 100101;
        pass = vaultKey;
        generateENK( {Key,pass,salt,keyLen,iteration });
        
        
        
    } else if (Key[ 'key' ] && vaultKey && RKey && !loginHash) { 
        loginHash = Key[ 'key' ];
        Key = {};
        encryptedVaultKey = encryptUserData({data:vaultKey,key:RKey});

    }
    else if (vaultKey && RKey && loginHash && encryptedVaultKey  ) {
        
        
        clearInterval( interval_handle );
        //Start Processing Sending request

    const dataToBeSent={
                email:data.email,
        loginHash: loginHash.toString( 'hex' ),
                    
               encryptedVaultKey
        }


        const body = JSON.stringify( dataToBeSent );

        console.log(dataToBeSent)
        
        
        Axios
            .post( '', body, config )
            .then()
            .catch( err => dispatch( {
                type: REGISTER_SUCCESS,
                payload:"opps! there has been a problem"
            }))
        
    }
}


    // console.log(Key)
let interval_handle = setInterval( checkKey, 50);
}


export const loginRoute =  ( data ) => dispatch=> {

    let pass = data.password;
    let salt = data.email;
    let keyLen = 32;
    let iteration = 100100;
    let Key = {};
    let vaultKey;
    
    let loginHash;


    generateENK( { pass, keyLen, salt, iteration ,Key} );
    

const checkKey =()=> {
    if ( Key['key'] && !vaultKey) {
        // console.log( 'Key has been generated: ', vaultKey);
        
        vaultKey = Key[ 'key' ];
        Key = {};

       //Generate Login Hash Here
       
       iteration = 100101;
       pass = vaultKey;
       generateENK( {pass,salt,keyLen,iteration,Key });
       
        
    } else if ( Key[ 'key' ] && vaultKey &&  !loginHash ) {
        loginHash = Key[ 'key' ];
        Key = {};
        clearInterval( interval_handle );


        //Start Processing Sending request

    const dataToBeSent={
                email:data.email,
                loginHash:loginHash.toString('hex'),
                
        }

        const body = JSON.stringify( dataToBeSent );

        console.log(body)
        
        Axios
            .post( '', body, config )
            .then()
            .catch( err => dispatch( {
                type: LOGIN_FAIL,
                payload:"opps! there has been a problem"
            }))
        
    }
}


    // console.log(Key)
let interval_handle = setInterval( checkKey, 50);
  
    
    
}














export const loadRequest = () => dispatch => {
    const requests = {
        fromOne:[
            {   
                id:'1233555487698698635',
                username:"seyi",
                //Find Details to be Shared with id
                type: 'vault code',
                
            },
            {   
                id:'12354547898769869866',
                type: 'card',
                username:"john",
               
            },
         
    
        ],


        fromMany:[
            {
            username:"seyi",
            type:"card"
            },
            {
                username:"john",
                type:"Keys"
            },
    ]
    }
    dispatch( {
        type: GET_SHARE_REQUEST,
        payload:requests
    })
}

export const loadData = () => ( dispatch ) => {
    const decryptedUserData =[];

    //Run a decrypt function for each data before sending to store
    dispatch( {
        type: LOAD_DATA,
        payload: [
            {   
                id:'12334',
                linked_acct: 'Facebook',
                username_email: 'seyijs@username.com',
                type: 'Login',
                fav: false,
                password:'sfsfsf'
                
            },
            {   
                id:'12674',
                linked_acct: 'Twitter',
                username_email: 'OLU_WASEYI',
                type: 'Login',
                password:'jjjjj',
                fav: false
            },
            {
                id:'12396874',
                linked_acct: 'Amazon',
                username_email: 'seyijs@username.com',
                type: 'Login',
                fav: true,
                password:'sfsff'
            },
            {
                id:'123676898',
                linked_acct: 'Instagram',
                username_email: 'seyijs',
                type: 'Login',
                fav: true,
                password:'Ssfsff'
            },
            {
                id:'1234667',
                type: 'card',
                bank: 'FirstBank',
                CardNumber: '50348765908765',
                pin: '1234',
                cvv: '234',
                name: 'Visa',
                expiryMonth:'01',
                expiryYear:"20",
                nameOnCard:'SEYI-JS',
                fav: false,
            },
            {   
                id:'14546466',
                type: 'card',
                bank: 'UBA',
                CardNumber: '50348765908765',
                pin: '1234',
                cvv: '234',
                name: 'Verve',
                expiryMonth:'01',
                expiryYear:"20",
                nameOnCard:'SEYI-JS',
                fav: true
            },
            {   
                id:'12575757',
                desc: 'Home vault',
                code: '1234',
                type: 'vault code',
                fav: false
            },
            {
                id:'12334345',
                desc: 'Office vault',
                code: '2345',
                type: 'vault code',
                fav: true
            },
            {   
                id:'1233555487698698635',
                desc: 'Bank vault',
                code: '345667',
                type: 'vault code',
                fav: false
            },
            {   
                id:'12354547898769869866',
                type: 'card',
                bank: 'Eco Bank',
                CardNumber: '50348765908765',
                pin: '1234',
                cvv: '234',
                name: 'Mastercard',
                expiryMonth:'01',
                expiryYear:"20",
                nameOnCard:'SEYI-JS',
                fav: false
            },
            {   

                id:'123350098908908997945',
                type: 'Keys',
                category: 'SSH',
                value: 'gdgdgdhdgdhdhdasfsfffdfdvdvgdgdgdhdgdhdhdasfsfffdfdvdvgdgdgdhdgdhdhdasfsfffdfdvdvgdgdgdhdgdhdhdasfsfffdfdvdvgdgdgdhdgdhdhdasfsfffdfdvdvgdgdgdhdgdhdhdasfsfffdfdvdvgdgdgdhdgdhdhdasfsfffdfdvdvgdgdgdhdgdhdhdasfsfffdfdvdvgdgdgdhdgdhdhdasfsfffdfdvdvgdgdgdhdgdhdhdasfsfffdfdvdvgdgdgdhdgdhdhdasfsfffdfdvdvgdgdgdhdgdhdhdasfsfffdfdvdv',
                desc:'Github SSH',
                fav: false
                
            },
            {
                id:'12438887970025465',
                type: 'Keys',
                category: 'RSA',
                privateKey: 'hhshghjsgfgf',
                publicKey: 'svhdvgsdvgvdsvdv',
                desc: 'Messaging App',
                fav: false
                

            },
            {
                id:'177777777732235',
                type: 'Keys',
                category: 'ENCRYPTION Key',
                value: 'dddddddddd',
                desc: 'SD CARD',
                fav: true
            },

            {
                id:'123354566',
                type:'Notes',
                desc:'Payment System',
                note:"A payment card number, primary account number (PAN), or simply a card number, is the card identifier found on payment cards, such as credit cards and debit cards, as well as stored-value cards, gift cards and other similar cards. In some situations the card number is referred to as a bank card number. The card number is primarily a card identifier and does not directly identify the bank account number/s to which the card is/are linked by the issuing entity. The card number prefix identifies the issuer of the card, and the digits that follow are used by the issuing entity to identify the cardholder as a customer and which is then associated by the issuing entity with the customer's designated bank accounts. In the case of stored-value type cards, the association with a particular customer is only made if the prepaid card is reloadable. Card numbers are allocated in accordance with ISO/IEC 7812. The card number is usually prominently embossed on the front of a payment card, and is encoded on the magnetic stripe and chip, but may be imprinted on the back of the card. ",
                fav: false
            },
            {
                id:'12323435',
                type:'Notes',
                desc:'Financial System',
                note:"The first six or eight digits of a card number (including the initial MII digit) are known as the issuer identification number (IIN). These identify the card issuing institution that issued the card to the card holder. The rest of the number is allocated by the card issuer. The card number's length is its number of digits. Many card issuers print the entire IIN and account number on their card.  ",
                fav: true
            },
           
        ]
    } )
};























