import React from 'react';
import ReactDOM from 'react-dom';
import Converter from './Converter';
import ReactTestUtils from 'react-dom/test-utils';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Converter />, div);
  ReactDOM.unmountComponentAtNode(div);
});

let converter = ReactTestUtils.renderIntoDocument(<Converter />);
let currencySelects = ReactTestUtils.scryRenderedDOMComponentsWithClass(converter, "currency-picker");
currencySelects[0].value = 1;
ReactTestUtils.Simulate.change(currencySelects[0]);
currencySelects[1].value = 1;
ReactTestUtils.Simulate.change(currencySelects[1]);
let currencyInput = ReactTestUtils.findRenderedDOMComponentWithClass(converter, "currency-input");
currencyInput.value = "123";
ReactTestUtils.Simulate.change(currencyInput);
let convertButton = ReactTestUtils.findRenderedDOMComponentWithClass(converter, "convert-button");
let conversionResult = ReactTestUtils.findRenderedDOMComponentWithClass(converter, "conversion-result");
ReactTestUtils.Simulate.click(convertButton);

test('conversion from and to the same currency doesn\'t change the amount', () => {
  expect(conversionResult.textContent)
  .toMatch(/(.*) is \1/s);
});
