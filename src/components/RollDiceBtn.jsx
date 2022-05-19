

function RollDiceBtn (props){
  return(
    <div>
      <button onClick={()=>props.rollFunc()}>Roll Dice</button>
    </div>
  )
}
export default RollDiceBtn