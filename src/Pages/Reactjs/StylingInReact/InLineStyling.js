import React from 'react'

const InLineStyling = () => {
    const styling={
        color:"white",
        backgroundColor:"blue",
        textAlign:"center",
        padding:"50px"
    }
  return (
    <div style={{margin:"10px"}}>

<h1  style={{color:"white",backgroundColor:"lightblue",textAlign:"center",padding:"50px"}} >
    welcome to Home Page
</h1>
<h1 style={styling}>
    welcome to contact page
</h1>
    </div>
  )
}

export default InLineStyling