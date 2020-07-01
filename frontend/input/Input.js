import React from 'react';

import './input.css';

const Input = ({ setMessage, sendMessage, message,typing,onFocus }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onFocus={typing}
      onBlur={onFocus}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default Input;