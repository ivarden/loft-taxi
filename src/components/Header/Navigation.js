import React from "react";
import styles from "../../helpers/useStyles";

const useStyles = styles({
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

export default function Navigation({ authorized, setAuthorized, setPage }) {
  const classes = useStyles();
  // const history = useHistory();
  // const handleLogOut = () => {
  //   setAuthorized();
  //   history.push("/");
  // };
  return (
    <>
      {authorized && (
        <div className={classes.wrap}>
            <span onClick={() => setPage("map")} className={classes.link_wrap}>
              Map
            </span>
            <span
              onClick={() => setPage("profile")}
              className={classes.link_wrap}
            >
              Profile
            </span>
            <span
              onClick={() => {
                setAuthorized();
                setPage("home");
              }}
              className={classes.link_wrap}
            >
              Log out
            </span>
        </div>
      )}
    </>
  );
}
