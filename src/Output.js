import React from 'react';

const Output = ({text}) => {
  console.log({text})
  return (
    <div className="output-container">
      <p>{text}</p>
    </div>
  );
};

export default Output;