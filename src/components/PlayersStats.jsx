import React from "react"


class PlayersStats extends React.Component {
  constructor() {
    super()
  }
  
  render() {
    return(
      <div>
        <div>Player 1</div>
        <div>{this.props.statsObj.player1.score}</div>
        <div>Player 2</div>
        <div>{this.props.statsObj.player2.score}</div>
        <div>dice one: {this.props.statsObj.diceOne}</div>
        <div>dice two :{this.props.statsObj.diceTwo}</div>
      </div>
    ) 
  }
}
export default PlayersStats