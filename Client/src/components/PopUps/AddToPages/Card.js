import React, {useState,useEffect} from 'react'
import { cancel, getAndRemoveClass} from '../../Utils/Utils'
import store from '../../../store'
import {addData} from '../../../actions/Actions'
const Card = ({setPopUpPage}) => {

    const [allDone,setAlldone] = useState(false);
    const [cardName, setCardName] =useState('')
    const [cardNumber, setCardNumber] =useState('')
    const [cardPin, setCardPin] =useState('')
    const [cvv, setCvv] =useState('')
    const [nameOnCard, setNameOnCard] =useState('')
    const [ bankName, setBankName ] = useState( '' )
    const [ expiryMonth, setExpiryMonth ] = useState( '' )
    const [expiryYear, setExpiryYear] = useState('')

    useEffect( () => {
        if ( cardName && cardNumber && cardPin && cvv && nameOnCard && bankName && expiryMonth && expiryYear ) {
            setAlldone( true )
        } else {
            setAlldone(false )
        }
    }, [ cardName, cardNumber, cardPin, cvv, nameOnCard, bankName, expiryMonth, expiryYear ] );

    const saveForm = () => {
        setPopUpPage( 'Loading' );

        setTimeout( () => {
            if ( cardName && cardNumber && cardPin && cvv && nameOnCard && bankName && expiryMonth && expiryYear ) {
                const data = {
                    id: '123444467',
                    type: 'card',
                    bank: bankName,
                    CardNumber: cardNumber,
                    pin: cardPin,
                    cvv: cvv,
                    expiryMonth,
                    expiryYear,
                    nameOnCard,
                    name: cardName,
                    fav: false,
                }
                store.dispatch( addData( data ) );
                getAndRemoveClass();
                
                setBankName( '' );
                setCardName( '' );
                setCardNumber( '' );
                setCardPin( '' );
                setCvv( '' );
                setExpiryMonth( '' )
                setExpiryYear( '' )
                setNameOnCard( '' )
            }
        }, 1000 * 2)
    };
    
    return (
        <div className="add-to-card pop-up-box">
            <form>
                <div className="card-number">
                    <label>Number</label>
                    <input type="text" value={cardNumber} onChange={(e)=> setCardNumber(e.target.value)} />
                </div>
                
                <div className="card-name">
                    <label>Name</label>
                    <input type="text" placeholder="e.g Visa" value={cardName} onChange={(e)=> setCardName(e.target.value)}/>
                </div>
                <div className="card-pin">
                    <label>Pin</label>
                    <input type="password" value={cardPin} onChange={(e)=> setCardPin(e.target.value)} />
                </div>
                <div className="cvv">
                    <label>CVV</label>
                    <input type="password" value={cvv} onChange={(e)=> setCvv(e.target.value)}/>
                </div>
                <div className="name-on-card">
                    <label>Name-On-Card</label>
                    <input type="text" autoCapitalize="true" value={nameOnCard} onChange={(e)=> setNameOnCard(e.target.value)}/>
                </div>
                <div className="name-of-bank">
                    <label>Bank</label>
                    <input type="text" autoCapitalize={true} value={bankName} onChange={(e)=> setBankName(e.target.value)}/>
                </div>
                <div className="exp-month">
                    <label>Expiry Month</label>
                    <input type="text" value={expiryMonth} onChange={(e)=> setExpiryMonth(e.target.value)} />
                </div>
                <div className="exp-year">
                    <label>Expiry Year</label>
                    <input type="text" value={expiryYear} onChange={(e)=> setExpiryYear(e.target.value)} />
                </div>

            </form>
            {(allDone)? <p className="save" onClick={()=>saveForm()}>save</p>: null}
            {cancel()}
        </div>
    )
}

export default Card
