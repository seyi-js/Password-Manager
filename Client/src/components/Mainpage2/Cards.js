import React from 'react'

const Cards = ({data}) => {
    return (
        <div className="card-details">
            <div className="card-design">
                <div className="card-details-1" >
                    <p>PIN:{ data.pin}</p>
                    <p>{ data.CardNumber}</p>
                </div>
                <div className="card-details-2">
                    <h1>{ data.bank[0]}</h1>
                </div>
                <div className="card-details-3">
                    <p>CVV:{ data.cvv }</p>
                    <p>{ data.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards
