import React from 'react';

let ConversionResult = (props) =>
  <div>
    {!props.state.convertedAmount ? "" :
    `${props.state.currencies[props.state.currencyFrom].symbol}${props.state.amount}
    is
    ${props.state.currencies[props.state.currencyTo].symbol}${props.state.convertedAmount}`}
  </div>;

export default ConversionResult;
