import React from 'react';

let ConversionResult = (props) =>
  <div className="conversion-result">
    {!props.convertedAmount ? (!props.amount ? "Invalid number." : "") :
    `${props.currencies[props.currencyFrom].symbol}${props.amount} is ${props.currencies[props.currencyTo].symbol}${props.convertedAmount}`}
  </div>;

export default ConversionResult;
