import React from "react";
import Cards from "react-credit-cards";
import Input from "../Input";
import "react-credit-cards/es/styles-compiled.css";
import Button from "@material-ui/core/Button";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  // formatFormData,
} from "./utils";

export default class PaymentForm extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    console.log(formData);
    this.setState({ formData });
    this.form.reset();
    this.props.handlePayment();
  };

  render() {
    const { name, 
      number, 
      expiry, 
      cvc, 
      focused, 
      issuer, 
      // formData 
    } = this.state;
    return (
      <div
        id="PaymentForm"
        style={{
          display: "flex",
          alignSelf: "center",
          flexDirection: "column",
          width: "300px",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h3 style={{ marginTop: "0", color: "darkgrey" }}>Enter your card</h3>
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
          callback={this.handleCallback}
        />
        <form
          ref={(c) => (this.form = c)}
          onSubmit={this.handleSubmit}
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <Input
            type="tel"
            name="number"
            label="Card Number"
            pattern="[\d| ]{16,22}"
            required
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            style={{ margin: "10px 0" }}
          />

          <Input
            type="text"
            name="name"
            label="Name on card"
            required
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            style={{ margin: "0" }}
          />
          <Input
            type="tel"
            name="expiry"
            label="Expiry date"
            pattern="\d\d/\d\d"
            required
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            style={{ margin: "10px 10px 0 0", flex: "1 1 45%" }}
          />
          <Input
            type="tel"
            name="cvc"
            label="CVC/CVV"
            pattern="\d{3,4}"
            required
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            style={{ margin: "10px 0", flex: "1 1 45%", textAlign: "center" }}
          />
          <input type="hidden" name="issuer" value={issuer} />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ margin: "10px 0 0 0", width: "100%" }}
          >
            Save
          </Button>
        </form>
        {/* {formData && (
          <div className="App-highlight">
            {formatFormData(formData).map((d, i) => (
              <div key={i}>{d}</div>
            ))}
          </div>
        )} */}
      </div>
    );
  }
}
