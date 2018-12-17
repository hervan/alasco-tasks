import React, { Component } from 'react';

class Converter extends Component {
  constructor(props) {
    
    super(props);

    this.state = {
      currencyFrom: 0,
      currencyTo: 0,
      amount: 0
    };
  }

  render() {
    return (
      <div>
        <header>
          <p>
            Currency Converter
          </p>
        </header>
        <main>
          <p>
            Choose the currencies you want to convert between:
            <CurrencyPicker key="1" />
            <CurrencyPicker key="2" />
            <CurrencyInput />
            <ConvertButton />
          </p>
        </main>
      </div>
    );
  }
}

export default Converter;
