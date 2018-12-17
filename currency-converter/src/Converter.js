import React, { Component } from 'react';

import CurrencyPicker from './CurrencyPicker';
import CurrencyInput from './CurrencyInput';
import ConvertButton from './ConvertButton';
import ConversionResult from './ConversionResult';

class Converter extends Component {
  state = {
      currencyFrom: 0,
      currencyTo: 1,
      amount: 1,
      convertedAmount: null,
      currencies: [
        { code: "EUR", symbol: "€", name: "euro", rate: 1 },
        { code: "USD", symbol: "US$", name: "dollar", rate: 1.13 },
        { code: "YEN", symbol: "¥", name: "yen", rate: 128.37 }
      ]
  };

  changeFrom = (id) => {
    this.setState({
      currencyFrom: id
    });
  }

  changeTo = (id) => {
    this.setState({
      currencyTo: id
    });
  }

  changeAmount = (amount) => {
    this.setState({
      amount: amount
    });
  }

  convert = () => {
    this.setState((state, props) => ({
      convertedAmount: state.amount
        * state.currencies[state.currencyTo].rate
        / state.currencies[state.currencyFrom].rate
    }));
  }

  render() {
    return (
      <div>
        <main>
          <div>
            <p>
              Choose currencies:
            </p>
            <CurrencyPicker key="from" currencies={this.state.currencies} changeHandler={this.changeFrom} selectedOption={this.state.currencyFrom} />
            <CurrencyPicker key="to" currencies={this.state.currencies} changeHandler={this.changeTo} selectedOption={this.state.currencyTo} />
          </div>
          <div>
            <p>
              Type an amount:
            </p>
            <CurrencyInput changeHandler={this.changeAmount} />
          </div>
          <ConvertButton convert={this.convert} />
          <ConversionResult state={this.state} />
        </main>
      </div>
    );
  }
}

export default Converter;
