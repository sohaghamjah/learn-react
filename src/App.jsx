import "./App.css";
import Card from './components/Card';
import Data from './data.json';

let items = [];
    items = Data.map((item, index) => <Card key={index} cardTitle={item.title} cardDesc={item.desc} /> );


function App() {
  return (
    <div className='wrapper'>
      <h1 className='appHeading'>To Do App</h1>
      {items}
    </div>
  )
}

export default App
