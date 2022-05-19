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
      curPlayer: 'player1',
      diceOne: 0,
      diceTwo: 0,
      isDouble: true,
    }
  }
  rollDice =()=> {
    this.setState({
      diceOne: Math.floor(Math.random()*(7-1)+1),
      diceTwo: Math.floor(Math.random()*(7-1)+1),
    })
    this.checkDouble()
  }
  checkDouble=()=> {
    (this.state.diceOne === this.state.diceTwo && this.state.diceOne)?
      this.setState({ isDouble: true }):
      this.setState({ isDouble: false });
      this.addToScore()
    }
    addToScore=()=> {
      this.setState({ player1: 
        { score: this.state.player1.score + this.state.diceOne + this.state.diceTwo}})
    }
  // 
  render() {
    return(
      <div>
        <PlayersStats statsObj={this.state}/>
        <RollDiceBtn data={this.state} rollFunc={this.rollDice} />
        <div>{this.state.isDouble && 'double'}</div>
      </div>
    )
  }
}

export default DisplayAll