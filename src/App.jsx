import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import State_Functional_Component from "./components/State_Functional_Component/index";


function App() {
  return (
    <div className='wrapper'>
      <h1 className='appHeading'>Learn React With Anisul Islam</h1>
      <Container>
        <State_Functional_Component />
      </Container>
    </div>
  )
}

export default App
