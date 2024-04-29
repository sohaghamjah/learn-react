const cardTitle = "Hello React Card";
const cardDesc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ";

function Card(){
  return (
    <div className='card'>
        <h3 className='cardTitle'>{cardTitle}</h3>
        <p className='cardDesc'>{cardDesc}</p>
        <p className='cardFooter'>Sohag Hamjah</p>
      </div>
  )
}

export default Card;