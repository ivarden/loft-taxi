import React from "react";
import Cards from "react-credit-cards";
import Input from "../Input";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "react-credit-cards/es/styles-compiled.css";
import Button from "@material-ui/core/Button";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  // formatFormData,
} from "./utils";

const useStyles = (theme) => ({
  root: {
    display: "flex",
    alignSelf: "center",
    flexDirection: "column",
    width: "300px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
  },
  form: { display: "flex", flexWrap: "wrap" },
  title: { marginTop: "0", color: "darkgrey" },
  number: { margin: "10px 0" },
  name: { margin: "0" },
  expiry: { margin: "10px 10px 0 0", flex: "1 1 45%" },
  cvc: { margin: "10px 0", flex: "1 1 45%" },
  button: { margin: "10px 0 0 0", width: "100%" },
});

class PaymentForm extends React.Component {
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
    const {
      name,
      number,
      expiry,
      cvc,
      focused,
      issuer,
      // formData
    } = this.state;
    const {
      handleCallback,
      handleInputFocus,
      handleInputChange,
      handleSubmit,
    } = this;
    const { classes } = this.props;

    return (
      <div id="PaymentForm" className={classes.root}>
        <Typography variant="h5" component="h2">
          Enter your card
        </Typography>
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
          callback={handleCallback}
        />
        <form
          ref={(c) => (this.form = c)}
          onSubmit={handleSubmit}
          className={classes.form}
        >
          <Input
            type="tel"
            name="number"
            label="Card Number"
            pattern="[\d| ]{16,22}"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className={classes.number}
          />

          <Input
            type="text"
            name="name"
            label="Name on card"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className={classes.name}
          />
          <Input
            type="tel"
            name="expiry"
            label="Expiry date"
            pattern="\d\d/\d\d"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className={classes.expiry}
          />
          <Input
            type="tel"
            name="cvc"
            label="CVC/CVV"
            pattern="\d{3,4}"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className={classes.cvc}
          />
          <input type="hidden" name="issuer" value={issuer} />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
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

export default withStyles(useStyles, { withTheme: true })(PaymentForm);
