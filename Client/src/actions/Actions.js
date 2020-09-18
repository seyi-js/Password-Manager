import { LOAD_DATA,DELETE_DATA, ADD_DATA} from './types';


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


export const loadData = () => ( dispatch ) => {
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
                type: 'keys',
                category: 'SSH',
                value: 'gdgdgdhdgdhdhdasfsfffdfdvdvgdgdgdhdgdhdhdasfsfffdfdvdvgdgdgdhdgdhdhdasfsfffdfdvdvgdgdgdhdgdhdhdasfsfffdfdvdvgdgdgdhdgdhdhdasfsfffdfdvdvgdgdgdhdgdhdhdasfsfffdfdvdvgdgdgdhdgdhdhdasfsfffdfdvdvgdgdgdhdgdhdhdasfsfffdfdvdvgdgdgdhdgdhdhdasfsfffdfdvdvgdgdgdhdgdhdhdasfsfffdfdvdvgdgdgdhdgdhdhdasfsfffdfdvdvgdgdgdhdgdhdhdasfsfffdfdvdv',
                desc:'Github SSH',
                fav: false
                
            },
            {
                id:'12438887970025465',
                type: 'keys',
                category: 'RSA',
                privateKey: 'hhshghjsgfgf',
                publicKey: 'svhdvgsdvgvdsvdv',
                desc: 'Messaging App',
                fav: false
                

            },
            {
                id:'177777777732235',
                type: 'keys',
                category: 'ENCRYPTION KEY',
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


