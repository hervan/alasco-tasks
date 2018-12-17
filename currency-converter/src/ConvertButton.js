import React from 'react';

let ConvertButton = (props) =>
  <div>
    <input type="button" className="convert-button fw btn btn-lg btn-secondary" onClick={(e) => props.convert()} value={props.loadingRates ? "..." : "convert"} disabled={props.loadingRates} />
  </div>;

export default ConvertButton;
