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
      diceOne: 6,
      diceTwo: 6,
      isDouble: true,
    }
  }
  rollDice =()=> {
    this.setState({
      diceOne: Math.floor(Math.random()*(7-1)+1),
      diceTwo: Math.floor(Math.random()*(7-1)+1),
    })
    if (this.state.diceOne === this.state.diceTwo) {
      this.setState({ isDouble: true })
    } else (
      this.setState({ isDouble: false })
    )
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