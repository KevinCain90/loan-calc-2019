import React, { Component } from "react";
import InputRange from "react-input-range";
import Display from "./Display";
import Header from "./Header";
import Footer from "./Footer";

import "../styles/App.css";
import "react-input-range/lib/css/index.css";

class Calculator extends Component {
  state = {
    amountValue: 5000,
    yearsValue: 1
  };

  handleAmountChange = value => {
    this.setState({ amountValue: value });
  };
  handleYearChange = value => {
    this.setState({ yearsValue: value });
  };

  render() {
    let { amountValue, yearsValue } = this.state;

    return (
      <React.Fragment>
        <Header />
        <div className="App">
          <h4>I want to borrow £{amountValue}</h4>
          <InputRange
            step={100}
            maxValue={20000}
            minValue={1000}
            value={amountValue}
            onChange={this.handleAmountChange}
          />
          <h4>
            Over {yearsValue} year{yearsValue > 1 && "s"}
          </h4>
          <InputRange
            step={0.5}
            maxValue={5}
            minValue={1}
            value={yearsValue}
            onChange={this.handleYearChange}
          />
          <Display years={yearsValue} amount={amountValue} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Calculator;
