import React, { Component } from 'react';

import CurrencyPicker from './CurrencyPicker';
import CurrencyInput from './CurrencyInput';
import ConvertButton from './ConvertButton';
import ConversionResult from './ConversionResult';

class Converter extends Component {
  state = {
      currencyFrom: 0,
      currencyTo: 0,
      amount: 1,
      convertedAmount: null,
      currentRate: 1,
      loadingRates: true,
      currencies: [
        { code: null, symbol: null, name: "choose a currency" },
        { code: "EUR", symbol: "€", name: "euro" },
        { code: "USD", symbol: "US$", name: "dollar" },
        { code: "JPY", symbol: "¥", name: "yen" }
      ]
  };

  changeCurrency = (from = null, to = null) => {
    
    this.setState({
      loadingRates: true
    });

    let currencyFrom = from ? from : this.state.currencyFrom;
    let currencyTo = to ? to : this.state.currencyTo;

    if (!currencyFrom || !currencyTo) {

      this.setState({
        currencyFrom: currencyFrom,
        currencyTo: currencyTo
      });
    } else if (currencyFrom === currencyTo) {

      this.setState({
        currencyFrom: currencyFrom,
        currencyTo: currencyTo,
        currentRate: 1,
        loadingRates: false,
        convertedAmount: null
      });
    } else {

      let conversion_code = `${this.state.currencies[currencyFrom].code}_${this.state.currencies[currencyTo].code}`;

      fetch(`http://free.currencyconverterapi.com/api/v5/convert?q=${conversion_code}&compact=y`)
      .then((results) => results.json())
      .then((data) => {
        this.setState({
          currencyFrom: currencyFrom,
          currencyTo: currencyTo,
          currentRate: data[conversion_code].val,
          loadingRates: false,
          convertedAmount: null
        });
      });
    }
  }

  changeFrom = (e) => {
    this.changeCurrency(Number(e.target.value), null);
  }

  changeTo = (e) => {
    this.changeCurrency(null, Number(e.target.value));
  }

  changeAmount = (e) => {
    let amount = Number(e.target.value);
    this.setState((prevState) => ({
      amount: Number(amount) == null ? prevState.amount : Number(amount),
      convertedAmount: null
    }));
  }

  convert = () => {
    this.setState((state, props) => ({
      convertedAmount: state.amount * state.currentRate
    }));
  }

  render() {
    return (
      <div>
        <main>
          <div>
            <CurrencyPicker key="from" currencies={this.state.currencies} changeHandler={this.changeFrom} />
            <CurrencyPicker key="to" currencies={this.state.currencies} changeHandler={this.changeTo} />
          </div>
          <div>
            <p>
              Type an amount:
            </p>
            <CurrencyInput amount={this.state.amount} changeHandler={this.changeAmount} />
          </div>
          <ConvertButton convert={this.convert} loadingRates={this.state.loadingRates} />
          <ConversionResult {...this.state} />
        </main>
      </div>
    );
  }
}

export default Converter;
