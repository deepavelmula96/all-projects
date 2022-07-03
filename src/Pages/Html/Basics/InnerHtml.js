import React from 'react'

const InnerHtml = () => {
    // <h1> innercontent</h1>
    // Here innercontent is the ==>innerHtml
    // ==>html content is changed by accessing the id of that particular tag , and using the innerHtml
    
    // eg:---
    // <h1 id="special">this is Heading</h1>
    
    // <script>
    //     document.getElementById('special').innerHTML="new Heading"
    // </script>
  return (
    <div>InnerHtml</div>
  )
}

export default InnerHtml