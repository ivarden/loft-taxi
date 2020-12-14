import { Route, Redirect } from "react-router-dom";

const PrivateRouter = ({
  component: RouteComponent,
  isLoggedIn,
  loginPath,
  ...rest
}) => (
  <Route
    {...rest}
    render={(routeProps) =>
      isLoggedIn ? (
        <RouteComponent {...routeProps} />
      ) : (
        <Redirect to={loginPath} />
      )
    }
  />
);

export default PrivateRouter;
