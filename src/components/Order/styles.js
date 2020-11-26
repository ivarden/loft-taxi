import styles from "../../helpers/useStyles";

export const useStyles = styles({
  root: {
    display: "flex",
    alignSelf: "flex-start",
    maxWidth: "380px",
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: "10px",
    boxSizing: "border-box",
    padding: "15px 10px 15px 10px",
    margin: "20px 0 0 20px",
    zIndex: "1000",
    "@media (max-width: 420px)": {
      margin: "0",
    },
    "& form": { margin: 0 },
  },
  textField: {
    display: "flex",
    marginBottom: "15px",
    backgroundColor: "white",
  },
  button: {
    margin: "1rem 0 0 0",
    "@media (max-width: 380px)": {
      marginTopo: "10px",
    },
  },
  "@global": {
    body: { padding: 0 },
  },
  cards: {
    display: "flex",
    backgroundColor: "white",
    boxSizing: "border-box",
    justifyContent: "space-around",
    padding: "0 0 0 0",
    "@media (max-width: 380px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100px",
    height: "140px",
    backgroundColor: "white",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    boxSizing: "border-box",
    // margin: "5px",
    cursor: "pointer",
    "& > img": {
      width: "90px",
      alignSelf: "center",
    },
    "@media (max-width: 420px)": {
      alignSelf: "center",
      // marginBottom: "5px",
    },
  },
  menu_item: {
    borderRadius: "10px",
    padding: "3px",
    "&:hover": {
      backgroundColor: "rgba(251, 199, 13, .8)",
    },
  },
});
