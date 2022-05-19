import React from "react"


function Hold (props) {
  return(
    <div>
      <button onClick={()=>props.holdFunc()}>test hold</button>
    </div>
  )
}
export default Hold