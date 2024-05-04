import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import State from "./components/State/State";
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div className='wrapper'>
      <h1 className='appHeading'>Learn React With Anisul Islam</h1>
      <Container>
        <State count="1"/>
      </Container>
    </div>
  )
}

export default App
