import React from "react";
import styles from "../../helpers/useStyles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import Form from "../Form";
import car_standart from "./car_standart.jpg";
import car_business from "./car_business.jpg";
import car_premium from "./car_premium.jpg";

import InputAdornment from "@material-ui/core/InputAdornment";
import NearMeIcon from "@material-ui/icons/NearMe";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

const useStyles = styles({
  root: {
    display: "flex",
    alignSelf: "flex-start",
    maxWidth: "380px",
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: "10px",
    boxSizing: "border-box",
    padding: "15px 10px 15px 10px",
    margin: "20px 0 0 20px",
    zIndex: "1000",
    "@media (max-width: 420px)": {
      margin: "0",
    },
    "& form": { margin: 0 },
  },
  textField: {
    display: "flex",
    marginBottom: "15px",
    backgroundColor: "white",
  },
  button: {
    margin: "1rem 0 0 0",
    "@media (max-width: 380px)": {
      marginTopo: "10px",
    },
  },
  "@global": {
    body: { padding: 0 },
  },
  cards: {
    display: "flex",
    backgroundColor: "white",
    boxSizing: "border-box",
    justifyContent: "space-around",
    padding: "0 0 0 0",
    "@media (max-width: 380px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100px",
    height: "140px",
    backgroundColor: "white",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    boxSizing: "border-box",
    // margin: "5px",
    cursor: "pointer",
    "& > img": {
      width: "90px",
      alignSelf: "center",
    },
    "@media (max-width: 420px)": {
      alignSelf: "center",
      // marginBottom: "5px",
    },
  },
  menu_item: {
    borderRadius: "10px",
    padding: "3px",
    "&:hover": {
      backgroundColor: "rgba(251, 199, 13, .8)",
    },
  },
});
const car_list = [
  { name: "Standart", price: 50, currency: "$", picture: car_standart },
  { name: "Busines", price: 100, currency: "$", picture: car_business },
  { name: "Premium", price: 150, currency: "$", picture: car_premium },
];
const streets = [
  {
    value: "1",
    label: "Sreet 1",
  },
  {
    value: "2",
    label: "Sreet 2",
  },
  {
    value: "3",
    label: "Sreet 3",
  },
  {
    value: "4",
    label: "Sreet 4",
  },
];
const streets2 = [
  {
    value: "1",
    label: "Sreet 1",
  },
  {
    value: "2",
    label: "Sreet 2",
  },
  {
    value: "3",
    label: "Sreet 3",
  },
  {
    value: "4",
    label: "Sreet 4",
  },
];

export default function Profile({ handleOrder }) {
  const classes = useStyles();
  // const [signin, setSignin] = useState({
  //   from: null,
  //   to: null,
  // });

  const onSubmit = (e) => {
    e.preventDefault();
    const from = e.target.from.value;
    const to = e.target.to.value;
    handleOrder();

    console.log(`\n from: ${from} \n to: ${to}`);
    return null;
    // console.log(signin);
  };
  // const onChangeInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   console.log(name, value)
  //   setSignin((state) => ({ ...state, [name]: value }));
  // };
  const [street, setStreet] = React.useState({
    from: "1",
    to: "2",
    car: 50,
  });
  const handleChange = (event) => {
    setStreet((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <Box component="div" className={classes.root}>
      <Form onSubmit={onSubmit}>
        <TextField
          className={classes.textField}
          id="from"
          name="from"
          select
          size="small"
          label="From"
          value={street.from}
          onChange={handleChange}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RadioButtonCheckedIcon />
              </InputAdornment>
            ),
          }}
        >
          {streets.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          className={classes.textField}
          id="to"
          name="to"
          select
          size="small"
          label="Choose destination"
          value={street.to}
          onChange={handleChange}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <NearMeIcon color="primary" />
              </InputAdornment>
            ),
          }}
        >
          {streets2.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {/* 
        <TextField
          className={classes.textField}
          id="car"
          name="car"
          value={street.car}
          onChange={handleChange}
          variant="standard"
          size="small"
          InputProps={{
            startAdornment: (
              <div className={classes.card} key={car_list[0].name}>
                <strong>{car_list[0].name}</strong>
                <span>Price</span>
                <strong>
                  {car_list[0].price} {car_list[0].currency}
                </strong>
                <img src={car_list[0].picture} alt={car_list[0].name} />
              </div>
            ),
          }}
        /> */}
        {/* <TextField> */}
        <div className={classes.cards}>
          {car_list.map((card) => (
            <MenuItem name='car' value={card.price} key={card.name} className={classes.menu_item}>
              <div className={classes.card}>
                <strong>{card.name}</strong>
                <span>Price</span>
                <strong>
                  {card.price} {card.currency}
                </strong>
                <img src={card.picture} alt={card.name} />
              </div>
            </MenuItem>
          ))}
        </div>
        {/* </TextField> */}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Order
        </Button>
      </Form>
    </Box>
  );
}
