import React from 'react'

const ForEach = () => {
    const items = [1, 29, 47];
    const copy = [];
    const copy1=[]
items.forEach((x,i)=>{
    copy.push({x:x*x})
    copy1.push(x*x)
})
console.log(items)
console.log(copy)
console.log(copy1)
  return (
    <div>ForEach</div>
  )
}

export default ForEach