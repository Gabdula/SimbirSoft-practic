import { useState } from 'react';
import './App.css';
import MyName from './components/MyName/MyName';
import MessageInput from './components/MessageInput/MessageInput';
import Rerenders from './components/Rerenders/Rerenders';
import Context from './context/context';
import Component2 from './components/Component2';

function App() {
  // const [message, setMessage] = useState('')
  const [count, setCount] = useState(0)
  let func = {
    count,
    setCount
  }
  return (
    <div>
      {/* <MyName name='Denis' age={19} city='Dimitrovgrad'/>
      <h1>My message: {message}</h1>
      <MessageInput setMessage={setMessage}/>
      <Rerenders/> */}
      <h1>Count: {count}</h1>
      <Context.Provider value={func}>
        <Component2/>

      </Context.Provider>
    </div>
  );
}

export default App;
