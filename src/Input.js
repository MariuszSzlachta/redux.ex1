import React from 'react';
import { handleInput } from './action';

const Input = ({handleInput}) => {
  console.log(handleInput);
  return (
    <div className="Input-container">
      <input
        type="text"
        onChange={(event) => handleInput(event.target.value)}
      />
    </div>
  );
};

export default Input;