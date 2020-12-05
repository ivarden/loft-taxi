import React, { forwardRef } from "react";
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";

const Input = () =>
  forwardRef((props, ref) => {
    return (
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        inputRef={ref}
        {...props}
        InputProps={{
          defaultValue: props.defaultValue,
        }}
      />
    );
  });

forwardRef.propTypes = {
  props: PropTypes.shape({ label: PropTypes.string, name: PropTypes.string })
    .isRequired,
  ref: PropTypes.object,
};

export default Input();
