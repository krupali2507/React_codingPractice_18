/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.



*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojiList: [],
    topScore: 0,
    isGameProgress: true,
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newScore = topScore
    if (currentScore > newScore) {
      newScore = currentScore
    }
    this.setState({topScore: newScore, isGameProgress: false})
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isEmojiPresent = clickedEmojiList.includes(id)
    const clickEmojisLength = clickedEmojiList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickEmojisLength)
    } else {
      if (clickEmojisLength === emojisList.length - 1) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
      }))
    }
  }

  renderEmojiList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <ul className="emojis-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            emojiDetail={eachEmoji}
            key={eachEmoji.id}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  resetGame = () => {
    this.setState({clickedEmojiList: [], isGameProgress: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state

    const isWon = emojisList.length === clickedEmojiList.length
    return (
      <WinOrLoseCard
        gameWin={isWon}
        score={clickedEmojiList.length}
        onClickPlayAgain={this.resetGame}
      />
    )
  }

  render() {
    const {clickedEmojiList, isGameProgress, topScore} = this.state

    return (
      <div className="bg-container">
        <NavBar
          currentScore={clickedEmojiList.length}
          topScore={topScore}
          isGameInProgress={isGameProgress}
        />
        <div className="game-body">
          {isGameProgress ? this.renderEmojiList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
