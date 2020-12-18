import styles from "../../helpers/useStyles";

export const useStyles = styles({
  root: {},
  wrap: { display: "flex" },
  link_wrap: {
    color: "#fff",
    fontSize: "1rem",
    marginLeft: "2rem",
    cursor: "pointer",
    textTransform: "uppercase",
    textDecoration: "none",
    "&:hover": {
      color: "#fdbf5a",
    },
    "&:active": {
      color: "#fdbf5a",
    },
    "&.active": {
      color: "#fdbf5a",
    },
  },
  "@media (max-width: 540px)": {
    link_wrap_: {
      fontSize: "1rem",
    },
  },
  "@media (max-width: 420px)": {
    link_wrap: {
      marginLeft: "0.5rem",
      fontSize: "0.8rem",
    },
  },
  "@media (max-width: 280px)": {
    link_wrap: {
      marginLeft: "0.6rem",
      fontSize: "0.8rem",
    },
  },
});
