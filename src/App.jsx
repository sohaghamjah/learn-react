import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Event_Handalling from "./components/Event_Handalling/index";


function App() {
  return (
    <div className='wrapper'>
      <h1 className='appHeading'>Learn React With Anisul Islam</h1>
      <Container>
        <Event_Handalling />
      </Container>
    </div>
  )
}

export default App
