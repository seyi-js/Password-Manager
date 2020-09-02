import React from 'react'

const allItems = () => {
    
    let alpha = [
        {
            name:'samuel'
        },
        {
            name:'aope'
        },
        {
            name:'pivsg'
        },
        {
            name:'jahs'
        }
    ]

    const singers = [
        { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
        { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
        { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
        { name: 'Stevie Nicks', band: 'Fleetwood Mac', born: 1948 },
      ];
      

    function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const bandA = a.name.toUpperCase();
        const bandB = b.name.toUpperCase();
     
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
               
                <>
                    <p>{ obj.name }</p>
                   
                    
                    </>
            ) ) }
            
            
           
        </div>
    )
}

export default allItems
