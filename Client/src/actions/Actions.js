import { LOAD_DATA } from './types';


export const loadData = () => ( dispatch ) => {
    dispatch( {
        type: LOAD_DATA,
        payload: [
            {
                linked_acct: 'Facebook',
                username_email: 'seyijs@username.com',
                type: 'Login',
                fav: false
                
            },
            {
                linked_acct: 'Twitter',
                username_email: 'OLU_WASEYI',
                type: 'Login',
                fav: false
            },
            {
                linked_acct: 'Amazon',
                username_email: 'seyijs@username.com',
                type: 'Login',
                fav: true
            },
            {
                linked_acct: 'Instagram',
                username_email: 'seyijs',
                type: 'Login',
                fav: true
            },
            {
                type: 'card',
                bank: 'FirstBank',
                CardNumber: '50348765908765',
                pin: '1234',
                cvv: '234',
                name: 'Visa',
                fav: false,
            },
            {
                type: 'card',
                bank: 'UBA',
                CardNumber: '50348765908765',
                pin: '1234',
                cvv: '234',
                name: 'Verve',
                fav: true
            },
            {
                desc: 'Home vault',
                code: '1234',
                type: 'vault code',
                fav: false
            },
            {
                desc: 'Office vault',
                code: '2345',
                type: 'vault code',
                fav: true
            },
            {
                desc: 'Bank vault',
                code: '345667',
                type: 'vault code',
                fav: false
            },
            {
                type: 'card',
                bank: 'Eco Bank',
                CardNumber: '50348765908765',
                pin: '1234',
                cvv: '234',
                name: 'Mastercard',
                fav: false
            },
            {
                type: 'keys',
                category: 'SSH',
                value: 'gdgdgdhdgdhdh',
                desc:'Github SSH'
                
            },
            {
                type: 'keys',
                category: 'RSA',
                privateKey: 'hhshghjsgfgf',
                publicKey: 'svhdvgsdvgvdsvdv',
                desc: 'Messaging App',
                

            },
            {
                type: 'keys',
                category: 'ENCRYPTION KEY',
                value: 'dddddddddd',
                desc: 'SD CARD',
            }
           
        ]
    } )
};


