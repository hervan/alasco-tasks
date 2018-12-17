import React from 'react';

let CurrencyPicker = (props) =>
  <select className="currency-picker hw" onChange={props.changeHandler}>
    {props.currencies.map(({code, name}, i) =>
      <option key={i} value={i}>{name}</option>
    )}
  </select>;

export default CurrencyPicker;
