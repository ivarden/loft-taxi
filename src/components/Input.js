import React, { forwardRef } from "react";
import { TextField } from "@material-ui/core";

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
