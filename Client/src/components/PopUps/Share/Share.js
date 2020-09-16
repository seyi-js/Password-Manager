import React, {useState} from 'react'

import {cancel,copyToClipBoard } from '../../Utils/Utils'
const Share =()=>{



    return(
        <div className="share pop-up-box">
            <div className="share-to-one">
                <h1>Share with One</h1>
                <form>
                    <div className="form">
                        <label><i className="fa fa-user-alt"></i></label>
                        <input type="text" placeholder="Enter Recipient Username"/>
                    </div>


                    <button>Share</button>
                </form>
                
            </div>
            <div className="share-to-many blur">
                <h1>Share with Many</h1>
                <form>
                    <div className="form">
                        <label onClick={()=>copyToClipBoard('copy-share-link')}><i className="fa fa-copy"></i></label>
                        <input type="text" id="copy-share-link" value="https://www.zpass.com/share" placeholder=""/>
                    </div>


                    <button>Generate Link</button>
                </form>
            </div> 

            {cancel()}
        </div>
    )
}


export default Share;