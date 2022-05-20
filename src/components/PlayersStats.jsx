import React from "react"


class PlayersStats extends React.Component {
  constructor() {
    super()
  }

  displayDice(res) {
    const diceArr = [1,2,3,4,5,6]
    // display correct dice
    for (let i = 0; i < diceArr.length; i++) {
      if (res === diceArr[i]) {
          return <div className={`cube dice${diceArr[i]}`}></div>
      }      
    }
  }
  highlightCur=(state, localCur)=> {
    if (state.curPlayer === localCur) {
      return 'highlightCur'
    }
  }
  render() {
    return(
      <div>
        <div className="players">
          <div className="player-cont">
           <div className={this.highlightCur(this.props.statsObj,this.props.statsObj.player1)}>Player 1</div>
           <div>{this.props.statsObj.player1.score}</div>
          </div>
          <div className="player-cont">
           <div className={this.highlightCur(this.props.statsObj,this.props.statsObj.player2)}>Player 2</div>
           <div>{this.props.statsObj.player2.score}</div>
          </div>
        </div>
        <div className="dice-cont">
         <div>dice one: {this.displayDice(this.props.statsObj.diceOne)}</div>
         <div>dice two: {this.displayDice(this.props.statsObj.diceTwo)}</div>
        </div>
      </div>
    ) 
  }
}
export default PlayersStats