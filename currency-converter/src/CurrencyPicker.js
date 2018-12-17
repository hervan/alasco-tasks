import React from 'react';

let CurrencyPicker = (props) =>
  <div>
    <select className="currency-picker" onChange={props.changeHandler}>
      {props.currencies.map(({code, name}, i) =>
        <option key={i} value={i}>{name}</option>
      )}
    </select>
  </div>;

export default CurrencyPicker;
