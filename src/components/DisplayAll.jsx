import React from "react"
import RollDiceBtn from "./RollDiceBtn"
import PlayersStats from "./PlayersStats"
import Hold from "./Hold"
import ResetBtn from "./ResetBtn"


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
      curPlayer: this.player1,
      diceOne: 0,
      diceTwo: 0,
    }
  }
  // note roll will not work at start until double because no default curPlayer
    rollDice =()=> {
    this.setState({
      diceOne: Math.floor(Math.random()*(7-1)+1),
      diceTwo: Math.floor(Math.random()*(7-1)+1),
    }, ()=>{this.checkDouble()})
    // this.checkDouble()
    }
    checkDouble=()=> {
    (this.state.diceOne === this.state.diceTwo)?
      this.doubleCase(this.state.curPlayer):
      this.notDouble();
    }
    addToScore=(cur)=> {
      this.setState({ cur: 
        { score: cur.score += this.state.diceOne + this.state.diceTwo}
      })
    }
    // hold
    invokeHold=()=>{
      if (this.state.curPlayer === this.state.player1) {
        this.setState({curPlayer: this.state.player2})
      } else {
        this.setState({curPlayer: this.state.player1})
      }
      console.log(this.state.curPlayer)
    }
     doubleCase=(cur)=> {
      this.setScoreToZero(cur)
      this.invokeHold()
    }
    notDouble=()=>{
      this.addToScore(this.state.curPlayer)
    }
    setScoreToZero=(cur)=>{
      this.setState({cur: cur.score = 0})
    }

  // 
  render() {
    return(
      <div>
        <PlayersStats statsObj={this.state}/>
        <RollDiceBtn data={this.state} rollFunc={this.rollDice} />
        <Hold data={this.state} holdFunc={this.invokeHold}/>
        <ResetBtn/>
        <div>{this.state.isDouble && 'double'}</div>
      </div>
    )
  }
}

export default DisplayAll