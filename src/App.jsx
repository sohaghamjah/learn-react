import "./App.css";
import Card from './components/Card';
import Data from './data.json';
import { v4 as uuidv4 } from 'uuid';

let items = [];
    items = Data.map((item) => <Card key={uuidv4()} cardTitle={item.title} cardDesc={item.desc} /> );


function App() {
  return (
    <div className='wrapper'>
      <h1 className='appHeading'>To Do App</h1>
      {items}
    </div>
  )
}

export default App
