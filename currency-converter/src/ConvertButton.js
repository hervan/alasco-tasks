import React from 'react';

let ConvertButton = (props) =>
  <div>
    <input type="button" className="convert-button" onClick={(e) => props.convert()} value={props.loadingRates ? "..." : "convert"} disabled={props.loadingRates} />
  </div>;

export default ConvertButton;
