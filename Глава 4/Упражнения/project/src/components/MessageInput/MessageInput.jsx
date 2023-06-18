import React from 'react';

const MessageInput = ({ setMessage }) => {
  return (
    <div>
      <input 
        type="text" 
        onChange={(e) => setMessage(e.target.value)} 
      />
    </div>
  );
};

export default MessageInput;
