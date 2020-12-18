import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../actions/user";
import { useStyles } from "./styles";

export default function Navigation() {
  const classes = useStyles();
  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const signOutHandler = () => {
    dispatch(signOut());
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
