import React from 'react';

let CurrencyPicker = (props) =>
  <div>
    <select onChange={(e) => props.changeHandler(Number(e.target.value))} defaultValue={props.selectedOption}>
      {props.currencies.map(({code, name}, i) =>
        <option key={i} value={i}>{name}</option>
      )}
    </select>
  </div>;

export default CurrencyPicker;
