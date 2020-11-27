import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
  },
}));

export default function Form({ children, ...props }) {
  const styles = useStyles();
  return (
    <form className={styles.root} {...props} noValidate>
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.any,
  props: PropTypes.object,
};
