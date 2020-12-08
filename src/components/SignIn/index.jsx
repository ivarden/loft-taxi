import { fetchSignIn } from "../../actions/user";
import { compose } from "lodash/fp";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import SignIn from './SignIn'

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (props) => dispatch(fetchSignIn(props)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(SignIn);
