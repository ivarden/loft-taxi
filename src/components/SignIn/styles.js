import styles from "../../helpers/useStyles";

export const useStyles = styles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignSelf: "center",
      maxWidth: "400px",
      width: "100%",
      backgroundColor: "white",
      alignItems: "center",
      borderRadius: "10px",
      boxSizing: "border-box",
      padding: "20px 40px",
    },
    textRight: {
      alignSelf: "flex-end",
      marginBottom: "1.5rem",
      marginTop: "0",
    },
    button: {
      marginBottom: ".5rem",
      marginTop: "1rem",
    },
    etc: { color: "#FDBF5A", textDecoration: "none", cursor: "pointer" },
  });
  