import { LOAD_DATA } from './types';


export const loadData = () => ( dispatch ) => {
    dispatch( {
        type: LOAD_DATA,
        payload: [
            {
                linked_acct: 'Facebook',
                username_email: 'seyijs@username.com',
                type: 'Login'
                
            },
            {
                linked_acct: 'Twitter',
                username_email: 'OLU_WASEYI',
                type: 'Login'
            },
            {
                linked_acct: 'Amazon',
                username_email: 'seyijs@username.com',
                type: 'Login'
            },
            {
                linked_acct: 'Instagram',
                username_email: 'seyijs',
                type: 'Login'
            },
            {
                type: 'card',
                bank: 'FirstBank',
                CardNumber: '50348765908765',
                pin: '1234',
                cvv: '234',
                name: 'Visa',
            },
            {
                type: 'card',
                bank: 'UBA',
                CardNumber: '50348765908765',
                pin: '1234',
                cvv: '234',
                name: 'Verve'
            },
            {
                desc: 'Home vault',
                code: '1234',
                type:'vault code'
            },
            {
                desc: 'Office vault',
                code: '2345',
                type:'vault code'
            },
            {
                desc: 'Bank vault',
                code: '345667',
                type:'vault code'
            },
            {
                type: 'card',
                bank: 'Eco Bank',
                CardNumber: '50348765908765',
                pin: '1234',
                cvv: '234',
                name: 'Mastercard'
            },
           
        ]
    } )
};


