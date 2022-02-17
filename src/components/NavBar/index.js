// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameInProgress} = props
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="game-logo"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="score-container">
          <p className="game-name">Score: {currentScore}</p>
          <p className="game-name">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
