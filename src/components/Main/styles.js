import styles from "../../helpers/useStyles";
import map from "./map.jpg";

export const useStyles = styles({
  root: {
    flex: "1 1 auto",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    backgroundImage: `url(${map})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    "@media (max-width: 420px)": {
      flex: "0 0 auto",
      minHeight: "90vh",
      padding: "1rem",
    },
  },
  isLoggedIn: {
    flex: "1 1 100%",
    display: "flex",
    justifyContent: "normal",
    backgroundImage: `url(${map})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    "@media (max-width: 768px)": {
      minHeight: "90vh",
      padding: "1rem",
    },
    "@media (max-width: 420px)": {
      flex: "0 0 auto",
      minHeight: "90vh",
      padding: "1rem",
    },
  },
});
