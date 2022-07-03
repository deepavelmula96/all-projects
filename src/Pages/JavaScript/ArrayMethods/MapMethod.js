import React from 'react'

const MapMethod = () => {
    const arr=[
        {name:'deepa',name2:'vemula'},
        {name:'rao',name2:'vemula'}
    ]
    const arr1=arr.map((x,i)=>({
        firstName:x.name,
        lastName:x.name2
    }))
  return (
    <div>
        {arr1.map((x,i)=><li key={i}>{x.firstName}_{x.lastName}</li>)}
    </div>
  )
}

export default MapMethod