import React from 'react';

let CurrencyInput = (props) =>
  <div>
    <input type="text" className="currency-input fw" onChange={props.changeHandler} />
  </div>;

export default CurrencyInput;
