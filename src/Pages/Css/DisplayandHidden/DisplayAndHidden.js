import React from 'react'
import './DisplayAndHIddencss.css'
const DisplayAndHidden = () => {
     const style={
        // div{
        //     width:"500px"
        //     height:
        // }
     }
    return (
        <div className='all'>
            <button>show</button>
            <div className="displayNone">
                Display property NOne

                display none mean it behave like we removed or deleted that particular element from the webpage
            </div>
            <div className="hidden">
                Hidden
                visibility hidden  mean it behave like we hide  that particular element from the webpage, but 

            </div>
        </div>
    )
}

export default DisplayAndHidden