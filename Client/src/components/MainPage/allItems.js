import React, {useEffect,useState} from 'react'
import { connect } from 'react-redux'
const AllItems = ({setData,general}) => {
    const [ currentPage, setCurrentPage ] = useState( 1 )
    const [postsPerPage] = useState(5)


    


    //From redux store
    const {data} = general

    const compare =(a, b) =>{
        // Use toUpperCase() to ignore character casing
        
        const A = a.type.toUpperCase();
        const B = b.type.toUpperCase();
     
        let comparison = 0;
        if (A > B) {
            comparison = 1;
            
        } else if (A < B) {
          comparison = -1;
        }
        
        return comparison;
      }

    //Pagination
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

      let sorted;
      if(data){
        sorted = currentPosts.sort( compare );
      }
 
    
    const pageNumbers = [];
    // data.length / postsPerPage
    let i;
    for ( let i = 2; i <= Math.ceil( data.length / postsPerPage ); i++ ){
        pageNumbers.push(i)
    }

    //Paginate
    const paginate = ( { e, number } ) => {
        findActiveClass(e)
        setCurrentPage( number );

    }

    const findActiveClass = (e) => {
        const siblings = e.currentTarget.parentElement.children
        const siblingsArray = Object.entries( siblings );

        siblingsArray.forEach(arr=>{
          
            
            arr[1].classList.remove( 'isActive' );
               
        })
        e.currentTarget.classList.add('isActive')
    }

   
    useEffect( () => {
        if(sorted){
            setData(sorted[ 0 ])
        } else {
            setData()
        }
    },[data])

    const loginItems = ( obj ) => {
        return (
            <div className="items" onClick={ () => setData( obj ) }>
                           
                <div className="icon">
                    <h1>{ obj.linked_acct[ 0 ] }</h1>
                </div>
                <div className="details">
                    <p className="details-1">{ obj.linked_acct }</p>
                    <p className="details-2">{ obj.username_email }</p>
                </div>
                
                <p className="type">{ obj.type }</p>
           
          
           
            
            </div>
        )
    };

    const cardItems = ( obj ) => {
        return (
            <div className="items" onClick={ () => setData( obj ) }>
                        
                <div className="icon">
                    <h1>{ obj.bank[ 0 ] }</h1>
                </div>
                <div className="details">
                    <p className="details-1">{ obj.bank }</p>
                    <p className="details-2">{ obj.CardNumber }</p>
                </div>
                
                <p className="type">{ obj.type }</p>
           
          
           
            
            </div>
        )
    };


    
    const vault = ( d ) => {
        return (
            <div className="code-vault-in-items" onClick={ () => setData( d ) }>
                
                <p>{ d.desc}</p>
                <p className="type">{ d.type}</p>
                <i className="fa fa-star"> </i>
            </div>
        )
    };

    const keys = (key) => {
        return (
            <div className="key-items key-items-in-allitems" onClick={()=> setData(key)}>
                <p>{ key.desc }</p>
                <p className="type">{ key.category }</p>
                <i className="fa fa-star"> </i>
            </div>
        )
    };

    const Note =(n)=>{

        //Split the data content into half
        const getNote=(n)=>{
            const len = n.note.length;
            const half = len/2
           const words= n.note.slice(0,half)
            
           return words;
        }
        return(
            <div className="notes-mainpage-1-inner" onClick={()=>setData(n)}>
            <div className="notes-1">
            <p>{n.desc}</p>
            <p>{getNote(n)}...</p>
        </div>
        <i className="fa fa-star"></i>
            </div>
        )
    };


    const pageButton = () => {

       

        return (
            <div className="page-button">
            {(pageNumbers.length > 1)?
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
            </div>
        )
    }

    return (
        <div className="all-items">
            
            { (sorted)? 
                sorted.map( obj => (
               
                    <div key={obj.id}>
                        { ( obj.type === 'Login' ) ? 
                            loginItems(obj) : ( obj.type === 'card' ) ?
                         cardItems(obj)  :(obj.type === 'vault code')? vault(obj):(obj.type === 'keys')? keys(obj) :(obj.type === 'Notes')? Note(obj):null }
                    </div>
                ) ) : <h1>No Data Available</h1>}
            
            
           {pageButton()}
        </div>
    )
}

const mapStateToProps = ( state ) => ({
    general: state.general
  })

export default connect(mapStateToProps, null)(AllItems)
