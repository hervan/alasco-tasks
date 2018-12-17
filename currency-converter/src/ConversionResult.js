import React from 'react';

let ConversionResult = (props) =>
  !props.convertedAmount ? null :
  <div className="conversion-result fw btn-lg alert alert-success" role="alert">
    {!props.amount ? "Invalid number." :
      `${props.currencies[props.currencyFrom].symbol}${props.amount.toFixed(props.currencies[props.currencyFrom].code === "JPY" ? 0 : 2)} is ${props.currencies[props.currencyTo].symbol}${props.convertedAmount.toFixed(props.currencies[props.currencyTo].code === "JPY" ? 0 : 2)}`}
  </div>;

export default ConversionResult;
