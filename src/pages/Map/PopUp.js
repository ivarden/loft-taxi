import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start",
    maxWidth: "440px",
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: "10px",
    boxSizing: "border-box",
    padding: "20px",
    margin: "20px 0 0 20px",
  },
  textField: {
    display: "flex",
    margin: "20px 0",
  },
  button: {
    margin: "1rem",
    width: "100%",
  },
  "@media (max-width: 420px)": {
    root: {
      margin: 0,
    },
  },
}));

export default function Popup({ handleOrder }) {
  const classes = useStyles();
  return (
    <Box className={classes.root} component="div">
      <Typography variant="h4" component="h3">
        Заказ размещен
      </Typography>
      <Typography variant="body1">
        Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
      </Typography>
      <Button
        className={classes.button}
        color="primary"
        onClick={handleOrder}
        variant="contained"
      >
        Сделать новый заказ
      </Button>
    </Box>
  );
}
