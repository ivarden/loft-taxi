import React, { forwardRef } from "react";
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";

export default forwardRef((props, ref) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      fullWidth
      inputRef={ref}
      {...props}
    />
  );
});

forwardRef.propTypes = {
  props: PropTypes.object,
  ref: PropTypes.any,
};
