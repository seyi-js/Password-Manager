import React, {useEffect} from 'react'

const Cards = ({setData, page}) => {


    const cards = [
        {
            type: 'card',
            bank: 'FirstBank',
            CardNumber: '50348765908765',
            pin: '1234',
            cvv: '234',
            name:'Visa',
        },
        {
            type: 'card',
            bank: 'UBA',
            CardNumber: '50348765908765',
            pin: '1234',
            cvv: '234',
            name:'Verve'
        },
        {
            type: 'card',
            bank: 'Eco Bank',
            CardNumber: '50348765908765',
            pin: '1234',
            cvv: '234',
            name: 'Mastercard'
        },
    ];

    function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const bandA = a.bank.toUpperCase();
        const bandB = b.bank.toUpperCase();
     
        let comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
            
        } else if (bandA < bandB) {
          comparison = -1;
        }
        
        return comparison;
      }
      
    const sorted = cards.sort( compare );

    useEffect( () => {
        setData(sorted[ 0 ])
    },[])
    return (
        <div className="cards">

            
            { sorted.map( card => (
                <>
                <div className="items" onClick={()=>setData(card)} >
                <div className="icon">
                    <h1>{ card.bank[ 0 ] }</h1>
                </div>
                <div className="details">
                    <p className="linked_acct">{ card.bank }</p>
                    <p className="username">{ card.CardNumber}</p>
                </div>
                
                   
               
              
               
                
            </div>
                </>
            ))}
        </div>
    )
}

export default Cards
