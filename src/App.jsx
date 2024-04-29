import "./App.css";
import Card from './components/Card';

function App() {
  return (
    <div className='wrapper'>
      <h1 className='appHeading'>To Do App</h1>
      <Card cardTitle="React With Next Js" cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "/>
      <Card cardTitle="Vue With Nuxt Js" cardDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "/>
    </div>
  )
}

export default App
