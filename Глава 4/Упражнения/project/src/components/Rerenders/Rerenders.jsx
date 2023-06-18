import React, { useEffect, useState } from 'react';

const Rerenders = () => {
  const [message, setMessage] = useState('')
  const [count, setCount] = useState(0)
  const [rerender, setRerender] = useState(0)
  useEffect(() => {
    setRerender((rerender) => rerender + 1)
    console.log(rerender)
  }, [message, count,])
  return (
    <div>
      <h1>Text: {message}</h1>
      <h1>Count: {count}</h1>
      <div style={{display: 'flex'}}>
        <input 
          type="text" 
          onChange={(e) => setMessage(e.target.value)} 
        />
        <button 
          onClick={() => setCount((count) => count + 1)}>
          Click me
        </button>
      </div>
    </div>
  );
}

export default Rerenders;
