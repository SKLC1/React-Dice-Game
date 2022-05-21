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
      curPlayer: null, 
      prevPlayer: null, 
      diceOne: 1,
      diceTwo: 1,
      isLost: false, // false
      isWin: false,
      didRoll: true,
      rollMsg: false,
    }
  }
  // note roll will not work at start until double because no default curPlayer
    rollDice =()=> {
      if(this.state.curPlayer === null){
        this.invokeHold()
        this.invokeHold()
      }
      this.setState({
        didRoll: true,
        rollMsg: false,
        diceOne: Math.floor(Math.random()*(7-1)+1),
        diceTwo: Math.floor(Math.random()*(7-1)+1),
      }, ()=>{this.checkDouble()}) // arrow func is used to callback in an async manner
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
      console.log(cur.score);
    }
    // hold
    invokeHold=()=>{
      if(this.state.didRoll === true){
        if (this.state.curPlayer === this.state.player1) {
          this.setState({curPlayer: this.state.player2, prevPlayer: this.state.player1})
        } else {
          this.setState({curPlayer: this.state.player1, prevPlayer: this.state.player2})
        }
        this.setState({didRoll: false})
      } else {
        this.setRollMsg()
      }
    }
     doubleCase=(cur)=> {
      this.setScoreToZero(cur)
      this.invokeHold()
    }
    notDouble=()=>{
      this.addToScore(this.state.curPlayer)
      this.didWin(this.state.curPlayer)
    }
    setScoreToZero=(cur)=>{
      this.setState({cur: cur.score = 0})
    }
    // win\lose case
    didWin=(cur)=>{
      (cur.score === 100)?
      this.winCase(cur):
      (cur.score > 100)?this.loseCase(cur):console.log('n');
    }
    winCase=(cur)=>{
      console.log(`${cur.name} win`);
      this.setState({isWin: true})
    }
    loseCase=(cur)=>{
      console.log(`${cur.name} lost`);
      this.setState({isLost: true})
    }
    // reset
    resetGame=()=> {
      this.setState({
          player1: {
            name: 'player1',
            score: 0,
          },
          player2: {
            name: 'player2',
            score: 0,
          },
          curPlayer: null, // find a way to give curPlayer default
          diceOne: 1,
          diceTwo: 1,
          isLost: false,
          isWin: false,
          didRoll: true,
      }, ()=>{this.invokeHold()})
    }
    displayRollFirstMsg(){
        return(
          <div>
          <h1 className="rollFirst-msg">You must roll at least Once</h1>
          </div>
        )
    }
    setRollMsg(){
      this.setState({rollMsg: true})
    }
  ///////////////////////////////////////////////////////////////////
  render() {
    if (!this.state.isLost && !this.state.isWin) { 
      return(
        <div>
         <PlayersStats statsObj={this.state}/>
         <div className="btn-cont">
           <RollDiceBtn data={this.state} rollFunc={this.rollDice} />
           <Hold data={this.state} holdFunc={this.invokeHold}/>
           <ResetBtn data={this.state} resetFunc={this.resetGame}/>
         </div>
           <div className="rollFirst-cont">
             {!this.state.didRoll&&this.state.rollMsg?this.displayRollFirstMsg():null}
           </div>
         <div>{this.state.isDouble && 'double'}</div>
        </div>
      )
    } else if(this.state.isLost){
      return(
        <div>
          <div>{`${this.state.prevPlayer.name} Won!!`} </div>
          <div>Would you Like to Play Again?</div>
          <ResetBtn data={this.state} resetFunc={this.resetGame}/>
        </div>
      )
    } else if(this.state.isWin){
      return(
      <div>
        <div>{`${this.state.curPlayer.name} Won!!`} </div>
        <div>Would you Like to Play Again?</div>
        <ResetBtn data={this.state} resetFunc={this.resetGame}/>
      </div>
      )
    }
  }
}

export default DisplayAll