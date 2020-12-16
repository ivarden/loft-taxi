import { compose } from "lodash/fp";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchRegisterUser } from "../../actions/user";

import SignUp from "./SignUp";

const mapStateToProps = (state) => ({
  success: state.user.success,
  token: state.user.token,
  error: state.user.error,
});
// const mapStateToProps = (state) => ({
//   success: state.newUser.success,
//   token: state.newUser.token,
//   error: state.newUser.error,
// });

const mapDispatchToProps = (dispatch) => ({
  signUp: (props) => dispatch(fetchRegisterUser(props)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(SignUp);
