import React from 'react';

const MyName = ({name, age, city}) => {
  return (
    <div>
      <h1>Name: {name}, Age: {age}, City: {city}</h1>
    </div>
  );
}

export default MyName;
