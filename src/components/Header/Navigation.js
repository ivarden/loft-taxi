import React from "react";
import styles from "../../helpers/useStyles";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignOut } from "../../redux/";

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

export default function Navigation() {
  const classes = useStyles();
  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const signOutHandler = () => {
    dispatch(fetchSignOut());
    history.push("/");
  };

  return (
    <>
      {isLoggedIn && (
        <div className={classes.wrap}>
          <NavLink to="/map" className={classes.link_wrap}>
            Map
          </NavLink>
          <NavLink to="/profile" className={classes.link_wrap}>
            Profile
          </NavLink>
          <Link to="" onClick={signOutHandler} className={classes.link_wrap}>
            Sign out
          </Link>
        </div>
      )}
    </>
  );
}
