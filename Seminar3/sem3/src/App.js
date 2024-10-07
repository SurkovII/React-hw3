// import logo from './logo.svg';
import './App.css';
// import Counter from './components/Counter';
// import Greeting from './components/Greeting';
// import MessagesList from './components/MessagesList';
// import { MessagesList1 } from './components/MessagesList1';
import TextDisplayForm from './components/TextDisplayForm/TextDisplayForm';
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher';
// import data from './data';
// import data1 from './data.json'

// console.log(data1)
// data1.push({id:4, text: "hi"})
// console.log(data1)

function App() {
  return (
    <div className="App">
      {/* <Greeting name="Иван"/> */}
      {/* <Greeting /> */}
      {/* <Greeting name={5}/> */}
      {/* <Counter /> */}
      {/* <MessagesList messages={data}/> */}
      {/* <MessagesList1 messages={data1}/> */}
      <TextDisplayForm/>
      <ThemeSwitcher />
    </div>
  );
}

export default App;
