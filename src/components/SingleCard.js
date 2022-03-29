import './SingleCard.css'

const SingleCard = ({ card, flipped, disabled, handleChoice }) => {

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }

  console.log(flipped)

  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

export default SingleCard;
