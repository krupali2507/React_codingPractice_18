// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {gameWin, score, onClickPlayAgain} = props
  const gameStatus = gameWin ? 'You Won' : 'You Lose'
  const scoreLabel = gameWin ? 'Best Score' : 'Score'
  const imgUrl = gameWin
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const onClickingPlayAgainBtn = () => {
    onClickPlayAgain()
  }

  return (
    <div className="game-result-container">
      <div className="game-result-status">
        <h1>{gameStatus}</h1>
        <div className="score-count">
          <p>{scoreLabel}</p>
          <p>{score}/12</p>
        </div>
        <button
          type="button"
          className="play-again-btn"
          onClick={onClickingPlayAgainBtn}
        >
          Play Again
        </button>
      </div>
      <div>
        <img src={imgUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
