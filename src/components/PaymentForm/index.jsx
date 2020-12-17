import React, { useState, useEffect, useRef } from "react";
import Cards from "react-credit-cards";
import { connect } from "react-redux";
import { compose } from "lodash/fp";
import Input from "../Input";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "react-credit-cards/es/styles-compiled.css";
import Button from "@material-ui/core/Button";
import { fetchAddCard, fetchCard } from "../../actions/card";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./utils";

const useStyles = (theme) => ({
  root: {
    display: "flex",
    alignSelf: "center",
    flexDirection: "column",
    width: "300px",
    backgroundColor: "white",
    padding: "5px 10px 15px 10px",
    borderRadius: "10px",
  },
  form: { display: "flex", flexWrap: "wrap", marginTop: "5px" },
  title: { margin: "0 0 5px 0", color: "darkgrey", alignSelf: "center" },
  number: { margin: "10px 0" },
  name: { margin: "0" },
  expiry: { margin: "10px 10px 0 0", flex: "1 1 45%" },
  cvc: { margin: "10px 0", flex: "1 1 45%" },
  button: { margin: "0", width: "100%" },
});

const PaymentForm = ({
  addCard,
  getCard,
  handlePayment,
  token,
  card,
  classes,
}) => {
  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  });

  const formRef = useRef();

  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setState((prevState) => ({ ...prevState, issuer }));
    }
  };

  const handleInputFocus = ({ target }) => {
    setState((prevState) => ({ ...prevState, focused: target.name }));
  };

  const clearLetter = (value = "") => {
    let res = [...value.replace(/[0-9]/gi, "")].join("");
    return res;
  };

  const handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    } else if (target.name === "name") {
      target.value = clearLetter(target.value);
    }

    setState((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    setState({ formData });

    addCard({
      cardNumber: state.number,
      cardName: state.name,
      expiryDate: state.expiry,
      cvc: state.cvc,
      token: token,
    });

    handlePayment();
    formRef.current.reset();
  };

  useEffect(() => {
    getCard(token);
    setState((prevState) => ({
      ...prevState,
      number: card.cardNumber || "",
      name: card.cardName || "",
      expiry: card.expiryDate || "",
      cvc: card.cvc || "",
    }));
  }, [card.cardNumber, card.cardName, card.expiryDate, card.cvc]);

  return (
    <div id="PaymentForm" className={classes.root}>
      <Typography variant="h5" component="h2" className={classes.title}>
        Enter your card
      </Typography>
      <Cards
        number={state.number}
        name={state.name}
        expiry={state.expiry}
        cvc={state.cvc}
        focused={state.focused}
        callback={handleCallback}
      />
      <form ref={formRef} onSubmit={handleSubmit} className={classes.form}>
        <Input
          type="tel"
          name="number"
          label="Card Number"
          pattern="[\d| ]{16,22}"
          value={state.number}
          required
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          className={classes.number}
        />

        <Input
          type="text"
          name="name"
          label="Name on card"
          pattern="/^[A-Za-z]+$/"
          value={state.name}
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
          value={state.expiry}
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
          value={state.cvc}
          required
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          className={classes.cvc}
        />
        <input type="hidden" name="issuer" value={state.issuer} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Save
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { token: state.user.token, card: state.card };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (payload) => {
      dispatch(fetchAddCard(payload));
    },
    getCard: (payload) => {
      dispatch(fetchCard(payload));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(useStyles, { withTheme: true })
)(PaymentForm);
