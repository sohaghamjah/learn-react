import './App.css'
const cardTitle = "Hello React Card";
const cardDesc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

function App() {
  return (
    <div>
      <h1 className='appHeading'>To Do App</h1>
      <div className='card'>
        <h3 className='cardTitle'>{cardTitle}</h3>
        <p className='cardDesc'>{cardDesc}</p>
        <p className='cardFooter'></p>
      </div>
    </div>
  )
}

export default App
