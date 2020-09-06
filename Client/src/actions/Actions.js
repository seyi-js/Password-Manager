import { LOAD_DATA } from './types';


export const loadData = () => ( dispatch ) => {
    dispatch( {
        type: LOAD_DATA,
        payload: [
            {
                linked_acct: 'Facebook',
                username_email: 'seyijs@username.com',
                type:'Login'
                
            },
            {
                linked_acct: 'Twitter',
                username_email: 'OLU_WASEYI',
                type:'Login'
            },
            {
                linked_acct: 'Amazon',
                username_email: 'seyijs@username.com',
                type:'Login'
            },
            {
                linked_acct: 'Instagram',
                username_email: 'seyijs',
                type:'Login'
            }
        ]
    } )
}