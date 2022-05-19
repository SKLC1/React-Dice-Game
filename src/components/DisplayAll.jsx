import React from "react"
import RollDiceBtn from "./RollDiceBtn"
import PlayersStats from "./PlayersStats"


class DisplayAll extends React.Component {
  constructor() {
    super()
    this.state = {
      player1: {
        name: 'player1',
        score: 0,
      },
      player2: {
        name: 'player2',
        score: 0,
      },
      diceOne: null,
      diceTwo: null,
    }
  }
  rollDice =()=> {
    console.log('a')
  }

  render() {
    return(
      <div>
        <PlayersStats statsObj={this.state}/>
        <RollDiceBtn data={this.state} rollFunc={this.rollDice} />
      </div>
    )
  }
}

export default DisplayAll