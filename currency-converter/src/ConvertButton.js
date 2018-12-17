import React from 'react';

let ConvertButton = (props) =>
  <div>
    <input type="button" onClick={(e) => props.convert()} value="convert" />
  </div>;

export default ConvertButton;
