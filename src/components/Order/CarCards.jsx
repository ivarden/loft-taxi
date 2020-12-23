import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import InputBase from "@material-ui/core/InputBase";
import { useStyles } from "./styles";
import car_standart from "../../assets/car_standart.jpg";
import car_business from "../../assets/car_business.jpg";
import car_premium from "../../assets/car_premium.jpg";

const car_list = [
  { name: "Standart", price: 25, currency: "$", picture: car_standart },
  { name: "Busines", price: 50, currency: "$", picture: car_business },
  { name: "Premium", price: 75, currency: "$", picture: car_premium },
];

export default function CarCards({handleInputChange}) {
  const classes = useStyles();

  return (
    <div className={classes.cards}>
      {car_list.map((card) => (
        <MenuItem key={card.name} className={classes.menu_item}>
          <div className={classes.card}>
            <strong>{card.name}</strong>
            <span>Price</span>
            <strong>
              {card.price} {card.currency}
            </strong>
            <img src={card.picture} alt={card.name} />
            <InputBase
              className={classes.cardInput}
              id="car"
              name="car"
              value={card.price}
              onClick={handleInputChange}
            />
          </div>
        </MenuItem>
      ))}
    </div>
  );
}
