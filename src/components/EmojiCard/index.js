// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetail, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetail

  const onClickingEmoji = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-container">
      <button type="button" className="emoji-button" onClick={onClickingEmoji}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
