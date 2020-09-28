import React,{useState} from 'react'
import {cancel } from '../../Utils/Utils'
import {connect} from 'react-redux'

const SharingCenter = ({general}) => {
    const [ currentShareFromOne, setCurrentShareFromOne ] = useState( 1 )
    const [ currentShareFromMany, setCurrentShareFromMany ] = useState( 1 )
    const [postsPerPage] = useState(1)
    const [view, setView] =useState('requestFromOne')

    const { fromOne } = general;//From Redux Store
    

    const { fromMany } = general;//From Redux Store


      //Share From One Pagination
      const indexOfLastShareFromOne = currentShareFromOne * postsPerPage;
      const indexOfFirstShareFromOne = indexOfLastShareFromOne - postsPerPage;
      const currentShareRequestFromOne = fromOne.slice(indexOfFirstShareFromOne, indexOfLastShareFromOne)


 //Share From Many Pagination
 const indexOfLastShareFromMany = currentShareFromMany * postsPerPage;
 const indexOfFirstShareFromMany = indexOfLastShareFromMany - postsPerPage;
 const currentShareRequestFromMany = fromMany.slice(indexOfFirstShareFromMany, indexOfLastShareFromMany)


      const pageNumbers = [];
      const pageFromMany =[];
      // data.length / postsPerPage
      let i;
      for ( let i = 2; i <= Math.ceil( fromOne.length / postsPerPage ); i++ ){
          pageNumbers.push(i)

          
      }

      for ( let i = 2; i <= Math.ceil( fromMany.length / postsPerPage ); i++ ){
        pageFromMany.push(i)

        
    }

      //Paginate
    const paginate = ( { e, number } ) => {
        // findActiveClass(e)
        setCurrentShareFromOne( number );

    }

    const paginateFromMany = ( { e, number } ) => {
        // findActiveClass(e)
        setCurrentShareFromMany( number );

    }
  

    const requestFromOne = () => {

        console.log(pageNumbers)
        return (
            <div className="request-from-one">
                { ( fromOne.length !== 0 ) ?
                    currentShareRequestFromOne.map( d => (
                        <div>
                            <h1>{d.username.toUpperCase()} is trying to share a {d.type} details with you.</h1>
                        <div className="options">
                            <p>Accept</p>
                            <p>Decline</p>
                        </div>

                        {(pageNumbers.length > 0)?
                            <>
                            <div className="isActive" onClick={(e)=>paginate({e,number:1})}>
                            <p >1</p>
                        </div>
                
                            <>
                            { pageNumbers.map( number => (
                                <div key={ number } onClick={(e)=>paginate({e,number})}>
                                    <p >{ number}</p>
                                </div>
                            ))}
                            </> 
                            </> : null }
                        
                        <h5><i className="fa fa-info-circle"></i>This user is trying to share one of his/her credential with you.<br></br>You can choose to Accept or Decline request.</h5>
                    </div> 
                   )): <h2>You do not have any request at the moment.</h2> }

            </div>
        )
    }

    const requestFromMany = () => {
        return (
            <div className="request-from-many">
                { ( fromMany.length !== 0 ) ? 
                    currentShareRequestFromMany.map( e => (
                        <div>
                            <h1>{e.username.toUpperCase()} is intrested in getting your {e.type} details.</h1>
                            <div className="options">
                                        <p>Share</p>
                                        <p>Decline</p>
                            </div>
                            {(pageFromMany.length > 0)?
                                <>
                                <div className="isActive" onClick={(e)=>paginateFromMany({e,number:1})}>
                                <p >1</p>
                            </div>
                    
                                <>
                                { pageFromMany.map( number => (
                                    <div key={ number } onClick={(e)=>paginateFromMany({e,number})}>
                                        <p >{ number}</p>
                                    </div>
                                ))}
                                </> 
                                </> : null }
                            
                            <h5><i className="fa fa-info-circle"></i>This user has your share to many link.<br></br>You can choose to Share or Decline request.</h5>
                    </div>
                   ))
                : <h2>You do not have any request at the moment.</h2> }
            </div>
        )
    }

    const sendShareRequest = () => {
        return (
            <div className="send-share-request">
                <form>
                    <div>
                        
                        <label>Generated Link</label>
                        <input type="text" placeholder="Enter sharing link" />
                        <h3>Enter the link sent to you by your friend.</h3>
                    </div>
                </form>
                <p>Send Request</p>
            </div>
        )
    }

    const toggle = ( {e,view} ) => {
        
        setView( view )
        
        const siblings = e.currentTarget.parentElement.children
        const siblingsArray = Object.entries( siblings );

        siblingsArray.forEach(arr=>{
          
            
            arr[1].classList.remove( 'isActive' );
               
        })
        
            e.currentTarget.classList.add('isActive')
        
    }
    return(
        <div className="sharing-center pop-up-box">
            
            <div className="left">
               <p onClick={(e)=>toggle({e,view:"requestFromOne"})} className="isActive">Request From one</p>
               <p onClick={(e)=>toggle({e,view:"requestFromMany"})}>Request From Many</p>
               <p onClick={(e)=>toggle({e,view:"sendShareRequest"})}>Send Share Request</p>
            </div>
            <div className="right">
                {(view === 'requestFromOne')? requestFromOne():(view === 'requestFromMany')? requestFromMany():(view === "sendShareRequest")? sendShareRequest() :null}
            </div>
            {cancel()}
        </div>
    )
}

const mapStateToProps = state => ( {
    general: state.general
})

export default connect(mapStateToProps, null)(SharingCenter);