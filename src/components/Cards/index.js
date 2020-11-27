import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import car_standart from "./car_standart.jpg";
import car_business from "./car_business.jpg";
import car_premium from "./car_premium.jpg";
import Card from "../Card";

const car_list = [
  { name: "Standart", price: 50, currency: "$", picture: car_standart },
  { name: "Busines", price: 100, currency: "$", picture: car_business },
  { name: "Premium", price: 150, currency: "$", picture: car_premium },
];

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: { padding: 0 },
  },
  root: {
    display: "flex",
    backgroundColor: "white",
    boxSizing: "border-box",
    justifyContent: "space-around",
    padding: "10px 0 0 0",
  },
  "@media (max-width: 420px)": {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
}));

export default function Cards() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {car_list.map((card) => (
        <Card key={card.name} card={card} />
      ))}
    </div>
  );
}
