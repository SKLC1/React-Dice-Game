

function RollDiceBtn (props){
  return(
    <div>
      <button onClick={()=>props.rollFunc()}>Test</button>
    </div>
  )
}
export default RollDiceBtn