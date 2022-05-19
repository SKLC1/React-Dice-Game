import React from "react"


function ResetBtn(props) {
  return(
    <div>
      <button onClick={()=>props.resetFunc()}>New Game</button>
    </div>
  )
}
export default ResetBtn