import React from 'react'

const allItems = () => {
    
    let alpha = [
        {
            linked_acct: 'Facebook',
            username_email: 'seyijs@username.com',
            
        },
        {
            linked_acct: 'Twitter',
            username_email: 'OLU_WASEYI',
        },
        {
            linked_acct: 'Amazon',
            username_email: 'seyijs@username.com',
        },
        {
            linked_acct: 'Instagram',
            username_email: 'seyijs',
        }
    ]

      

    function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const bandA = a.linked_acct.toUpperCase();
        const bandB = b.linked_acct.toUpperCase();
     
        let comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
            
        } else if (bandA < bandB) {
          comparison = -1;
        }
        
        return comparison;
      }
      
    const sorted = alpha.sort(compare)

    return (
        <div className="all-items">
            
            { sorted.map( obj => (
               
                <div className="items">
                    <div className="icon">
                        <h1>{ obj.linked_acct[ 0 ] }</h1>
                    </div>
                    <div className="details">
                        <p className="linked_acct">{ obj.linked_acct }</p>
                        <p className="username">{ obj.username_email}</p>
                    </div>
                  
                   
                    
                </div>
            ) ) }
            
            
           
        </div>
    )
}

export default allItems
