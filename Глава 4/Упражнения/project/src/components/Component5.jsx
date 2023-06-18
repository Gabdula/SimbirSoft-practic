import React, { useContext } from 'react';
import Context from '../context/context';

const Component5 = () => {
  const {setCount} = useContext(Context)
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Click me</button>
    </div>
  );
}

export default Component5;
