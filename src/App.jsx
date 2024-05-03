import "./App.css";
import Card from './components/Card';
import Data from './data.json';
import { v4 as uuidv4 } from 'uuid';
import Card2 from "./components/Card2";

let items = [];
    items = Data.map((item) => <Card key={uuidv4()} cardTitle={item.title} cardDesc={item.desc} /> );


function App() {
  return (
    <div className='wrapper'>
      <h1 className='appHeading'>To Do App</h1>
      {items}
      <Card2 CardTitle="Hello Class Component" />
    </div>
  )
}

export default App
