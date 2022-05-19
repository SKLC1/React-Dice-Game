import React from "react"


function Hold (props) {
  return(
    <div>
      <button onClick={()=>props.holdFunc()}>Hold</button>
    </div>
  )
}
export default Hold