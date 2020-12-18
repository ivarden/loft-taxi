import styles from "../../helpers/useStyles";

export const useStyles = styles({
  logo_wrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "60%",
    "@media (max-width: 768px)": {},
    "@media (max-width: 420px)": {
      flexDirection: "row",
      maxWidth: "40%",
    },
  },
  logo_wrap_isLoggedIn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth: "40%",
    "@media (max-width: 768px)": {
      maxWidth: "40%",
    },
    "@media (max-width: 320px)": {
      flexDirection: "row",
      maxWidth: "35%",
    },
  },

  logo_img: {
    width: "50%",
    margin: "0 0 1rem 0",

    "@media (max-width: 768px)": {
      maxWidth: "40%",
    },

    "@media (max-width: 420px)": {
      maxWidth: "30%",
      margin: "0 0 0 0",
      marginRight: "10px",
    },
  },
  logo_title: {
    width: "70%",

    "@media (max-width: 420px)": {
      // marginRight: "10px",
    },
  },

  logo_img_isLoggedIn: {
    width: "20%",
    margin: "0 0.6rem 0 0",
  },
  logo_title_isLoggedIn: { width: "80%" },
});
