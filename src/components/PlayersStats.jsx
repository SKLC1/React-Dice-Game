import React from "react"


class PlayersStats extends React.Component {
  constructor() {
    super()
  }
  
  render() {
    return(
      <div>
        <div>{this.props.statsObj.player1.name}</div>
        <div>{this.props.statsObj.player1.score}</div>
        <div>{this.props.statsObj.player2.name}</div>
        <div>{this.props.statsObj.player2.score}</div>
        <div>dice one: {this.props.statsObj.diceOne}</div>
        <div>dice two :{this.props.statsObj.diceTwo}</div>
      </div>
    ) 
  }
}
export default PlayersStats