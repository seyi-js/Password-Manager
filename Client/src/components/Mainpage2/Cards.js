import React,{useState,useEffect} from 'react'
import {loadDom, copyToClipBoard} from '../Utils/Utils'
const Cards = ({data,setDisabled,disabled}) => {
    const [type, setType] = useState('password')
    const setD = (id) => {
        setDisabled( false )
        setTimeout(()=>copyToClipBoard(id), 100)
        
}


    const viewPin = ( id ) => {
      
        setType('text')
        setD(id)
    }

    return (
        <>
            {(data)? <div className="card-details">
            <div className="card-number">
                    <label>Number</label>
                    <input type="text" id="card-number-input" className="card-number-input" value={data.CardNumber} disabled={disabled} />
                    <i className="fa fa-copy" onClick={()=>setD("card-number-input")}></i>
            </div>
            
            <div className="card-name">
                <label>Name</label>
                <input type="text" disabled={true} placeholder="e.g Visa" value={data.name} />
            </div>
            <div className="card-pin">
                <label>Pin</label>
                    <input type={type} className="card-pin-input" id="card-pin-input" disabled={ disabled } value={ data.pin } />
                    <i className="fa fa-copy" onClick={()=>viewPin("card-pin-input")}></i>
            </div>
            <div className="cvv">
                <label>CVV</label>
                    <input type={type} disabled={ disabled } className="card-cvv-input" id="card-cvv-input" value={ data.cvv } />
                    <i className="fa fa-copy" onClick={()=>viewPin("card-cvv-input")}></i>
            </div>
            <div className="name-on-card">
                <label>Name-On-Card</label>
                <input type="text" autoCapitalize="true" disabled={true} value={data.nameOnCard.toUpperCase()} />
            </div>
            <div className="name-of-bank">
                <label>Bank</label>
                <input type="text" disabled={true} value={data.bank} />
            </div>
            <div className="exp-month">
                <label>Expiry Month</label>
                <input type="text" disabled={true} className="card-exp-month" value={data.expiryMonth} />
            </div>
            <div className="exp-year">
                <label>Expiry Year</label>
                <input type="text" disabled={true}  className="card-exp-year" value={data.expiryYear}  />
            </div>
    </div>: null}
        </>
    )
}

export default Cards
