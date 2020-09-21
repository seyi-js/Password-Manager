import React,{useState, useEffect} from 'react'
import { cancel, getAndRemoveClass,generateRSAkeys,generateENK} from '../../Utils/Utils'
import store from '../../../store'
import {addData} from '../../../actions/Actions'
const Keys = ({setPopUpPage,popUpPage}) => {
    const [ desc, setDesc ] = useState( '' );
    const [ ENKdesc, setENKDesc ] = useState( '' );
    const [ value, setValue ] = useState( '' );
    const [ pubKey, setPubKey ] = useState( '' );
    const [ pKey, setPkey ] = useState( '' );
    const [ allDone, setAllDone ] = useState( false );
    const [ type, setType ] = useState( 'RSA' )
    const [ checkBox, setCheckBox ] = useState( true );
    const [keyLen, setKeyLen] = useState('');
    const [pass, setPass] = useState('')
    const [salt, setSalt] = useState('')
    const[keys, setKeys] = useState()

   


    useEffect( () => {
        if ( desc && value ) {
            setAllDone( true )
            
        } else if(pubKey && pKey && desc){
            setAllDone(true)
        }else if(ENKdesc && value){
            setAllDone(true)
            setCheckBox(false)
        } else if( ENKdesc && checkBox && keyLen && pass && salt){
            setAllDone(true)
        }else if( desc && checkBox){
            setAllDone(true)
        }else{
            setAllDone(false)
        }

        
    }, [ desc, value,pubKey,pKey,checkBox,keyLen,pass,salt,ENKdesc ] );


    

    const toggle = ( {e,d} ) => {
        setDesc( '' )
        setValue( '' )
        setENKDesc('')
        setCheckBox(true)
        setType( d )
        
        const siblings = e.currentTarget.parentElement.children
        const siblingsArray = Object.entries( siblings );

        siblingsArray.forEach(arr=>{
          
            
            arr[1].classList.remove( 'active' );
               
        })
        
            e.currentTarget.classList.add('active')
        
    }





    const setUpdateKey = (e) => {
        const check = document.getElementsByClassName( 'fa-check' )
        if ( check[ 0 ].classList.contains( 'checked' ) ) {
            check[ 0 ].classList.remove( 'checked' );
            setCheckBox( false )
            
        }
        setValue( e.target.value );
    }



    const setUpdateRSAKeys = ({e,d}) => {
        const check = document.getElementsByClassName( 'fa-check' )
        if ( d === 'pKey' ) {
            if ( check[ 0 ].classList.contains( 'checked' ) ) {
                check[ 0 ].classList.remove( 'checked' );
                setCheckBox( false )
                
            }
            setPkey(e.target.value)
        } else if ( d === 'pubKey' ) {
            if ( check[ 0 ].classList.contains( 'checked' ) ) {
                check[ 0 ].classList.remove( 'checked' );
                setCheckBox( false )
                
            }
            setPubKey(e.target.value)
       }
        
    }





    const toggleCheckBox = ( e ) => {
        e.preventDefault();
        
        // console.log()
        if ( e.currentTarget.firstElementChild ) {
            if ( e.currentTarget.firstElementChild.classList.contains( 'checked' ) ) {
                e.currentTarget.firstElementChild.classList.remove( 'checked' );
                setCheckBox(false)
                
            } else {
                e.currentTarget.firstElementChild.classList.add( 'checked' );
                
                
                // password[0].value=''
                setCheckBox( true )
                setValue('')
                setPkey( '' )
                setPubKey('')
            }
        }
        
    }




    //SAVE FORM
    const saveForm = () => {
        setPopUpPage( 'Loading' );
        let data;
      
            setTimeout(()=>{if ( type === 'SSH' ) {
                data = {
                    id:'123350098908908997945',
                    type: 'keys',
                    category: 'SSH',
                    value: value,
                    desc:desc,
                    fav: false
                }
                store.dispatch( addData( data ) )
                    getAndRemoveClass();
                    setDesc( '' )
                    setValue('')
            } else if ( type === 'ENK' &&  !checkBox ) {
                data = {
                    id:'177777777732235',
                    type: 'keys',
                    category: 'ENCRYPTION KEY',
                    value: value,
                    desc: ENKdesc,
                    fav: true
                }
                store.dispatch( addData( data ) )
                    getAndRemoveClass();
                    setDesc( '' )
                    setValue('')
            }  else if ( type === 'ENK' && checkBox ) {
                
    
                generateENK( { pass, salt, keyLen} ).then( ( result ) => {
                    data = {
                        id:'177777777732235',
                        type: 'keys',
                        category: 'ENCRYPTION KEY',
                        value: result.toString('hex'),
                        desc: ENKdesc,
                        fav: true
                    }
                    store.dispatch( addData( data ) )
                        getAndRemoveClass();
                        setDesc( '' )
                        setValue('')
                } ).catch( err => {
                    console.log(err)
                    getAndRemoveClass();
                })
                  
                
            } else if ( type === 'RSA' && !checkBox ) {
                data = {
                    id:'12438887970025465',
                    type: 'keys',
                    category: 'RSA',
                    privateKey: pKey,
                    publicKey: pubKey,
                    desc: desc,
                    fav: false
                }
    
                store.dispatch( addData( data ) )
                    getAndRemoveClass();
                    setDesc( '' )
                    setValue('')
            } else if ( type === 'RSA' && checkBox ) {
            //     let keyPairs = generateRSAkeys()
            // console
    
            generateRSAkeys().then( ( k ) => {
                data = {
                    id:'12438887970025465',
                    type: 'keys',
                    category: 'RSA',
                    privateKey: k.pKey,//Generate
                    publicKey: k.pubKey,
                    desc: desc,
                    fav: false
                    }
    
                store.dispatch( addData( data ) )
                
                    getAndRemoveClass();
                    setDesc( '' )
                    setValue('')
            } ).catch( err => {
                getAndRemoveClass();
            })
            
                
                    
                  
            };
    }, 1000 * 2)
       
        
        
    }

    

    const SSH = () => {
        return (
            <div className="add-to-ssh">
                <form>
                    <div className="desc">
                        <label>Description</label>
                        <input type="text" value={ desc } onChange={ ( e ) => setDesc( e.target.value ) } />
                    </div>
                    <div className="value">
                        <label>Key</label>
                        <input type="text" value={ value } onChange={ ( e ) => setValue( e.target.value ) } />
                    </div>
                </form>
            </div>
        )
    };


    const ENK = () => {
        return(
            <div className="add-to-encryption">
        <form>
            <div className="desc">
                <label>Description</label>
                <input type="text" value={ ENKdesc } onChange={ ( e ) => setENKDesc( e.target.value ) } />
            </div>
            <div className="value">
                <label>Key</label>
                <input type="text" value={ value } onChange={ ( e ) => setUpdateKey(e ) } />
            </div>
        {(checkBox)? 
       <> <div className="value">
       <label>Key length</label>
       <input type="number" value={keyLen} onChange={(e)=>setKeyLen(parseInt(e.target.value))} />
   </div>
   <div className="value">
       <label>Password</label>
       <input type="text" value={pass} onChange={(e)=>setPass(e.target.value)} />
   </div>
   <div className="value">
       <label>Salt</label>
       <input type="text" value={salt} onChange={(e)=>setSalt(e.target.value)} />
   </div> </>: null}
            <div className="generate_e_key">
            <label>Auto-Generate Key(pbkdf2)</label>
            <button className="checkbox" onClick={(e)=>toggleCheckBox(e)} >
                <i className="fa fa-check checked not-checked"></i>
            </button>        
        </div>
            
        </form>
    </div>
        )
    }

    

    const RSA = () => {
        return (
            <div className="add-to-rsa">
        <form>
            <div className="desc">
                <label>Description</label>
                <input type="text" value={ desc } onChange={ ( e ) => setDesc( e.target.value ) } />
            </div>
            <div className="pubKey">
                <label>Public Key</label>
                <input type="text" value={ pubKey } onChange={ ( e ) => setUpdateRSAKeys( {e,d:"pubKey"}) } />
            </div>
            <div className="pKey">
                <label>Private Key</label>
                <input type="text" value={ pKey } onChange={ ( e ) => setUpdateRSAKeys({e, d: 'pKey'}) } />
                    </div>
                    <div className="generate_e_key">
            <label>Auto-Generate Keys(RSA)</label>
            <button className="checkbox" onClick={(e)=>toggleCheckBox(e)} >
                <i className="fa fa-check checked not-checked"></i>
            </button>        
        </div>
        </form>
    </div>
        )
    }



    return (
        <div className="add-to-keys pop-up-box">
            <div className="keys-left">
                <h1>Category</h1>
                
                <p onClick={e=>toggle({e,d:"RSA"})} className=" active">SSH</p>
                <p onClick={e=>toggle({e,d:"ENK"})}>ENCRYPTION KEYS</p>
            </div>
            <div className="keys-right">
                {(type === "RSA")? RSA():  (type === 'ENK')? ENK(): null}
            </div>

            {(allDone)? <p className="save" onClick={()=>saveForm()}>save</p>: null}
            {cancel()}
        </div>
    )
}

export default Keys
