function Card(props){
  const {cardTitle, cardDesc} = props;
  return (
    <div className='card'>
      <h3 className='cardTitle'>{cardTitle}</h3>
      <p className='cardDesc'>{cardDesc}</p>
      <p className='cardFooter'>Sohag Hamjah</p>
    </div>
  )
}

export default Card;