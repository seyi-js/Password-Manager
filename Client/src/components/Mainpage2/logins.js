import React from 'react'

const logins = () => {

    let alpha = [
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

    return (
        <div className="logins">
            <div className="login-header">
                <div className="icon">
                    <h1>{ alpha[0].linked_acct[ 0 ] }</h1>
                </div>
                <div className="details">
                    <p className="linked_acct">{ alpha[0].linked_acct }</p>
                    <p className="type">{ alpha[0].type }</p>
                </div>
                
                    <p className="type star"><i className="fa fa-star"></i></p>
            
        
            </div>

            <div className="login-body">
                <div>
                    <label>Username</label>
                    <input type="text" value={ alpha[0].username_email}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={ alpha[ 0 ].username_email } />
                    <i className="fa fa-eye"></i>
                    <i className="fa fa-eye-slash"></i>
                    <i className="fa fa-copy"></i>
                </div>
            </div>
        </div>
    )
}

export default logins
