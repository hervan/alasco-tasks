import React from 'react';

let CurrencyInput = (props) =>
  <div>
    <input type="text" onChange={(e) => props.changeHandler(Number(e.target.value))} />
  </div>;

export default CurrencyInput;
