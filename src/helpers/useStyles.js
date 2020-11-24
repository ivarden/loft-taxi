import { makeStyles } from "@material-ui/core/styles";

export default function style(style) {
  return makeStyles((theme) => ({ ...style }));
}
