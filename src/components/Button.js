import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

function Btn({ title, ...rest }) {
  return (
    <Button type="submit" variant="contained" color="primary" {...rest}>
      {title}
    </Button>
  );
}

Btn.propsTypes = {
  text: PropTypes.string,
  classes: PropTypes.object,
  rest: PropTypes.any
};

export default Btn;
