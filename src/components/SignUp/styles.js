import styles from "../../helpers/useStyles";

export const useStyles = styles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    maxWidth: "400px",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    boxSizing: "border-box",
    padding: "20px 40px",
  },
  button: {
    margin: "1rem 0 .5rem 0",
  },
  etc: {
    color: "#FDBF5A",
    textDecoration: "none",
    cursor: "pointer",
  },
});
