import React, { useState, useEffect } from "react";
import Order from "../../components/Order";
import Main from "../../components/Main";
import PopUp from "../../components/PopUp/PopUpMap";
import MapboxMap from "../../components/MapboxMap";
import { compose } from "lodash/fp";
import { connect } from "react-redux";
import { fetchOrder } from "../../actions/order";
import { fetchCard } from "../../actions/card";
import { fetchAddresses } from "../../actions/addresses";
import { withRouter } from "react-router";

function Map({
  fetchOrder,
  fetchCard,
  fetchAddresses,
  history,
  addresses,
  token,
  error,
}) {
  const [order, setOrder] = useState(true);
  const handleOrder = () => {
    setOrder((prev) => !prev);
  };

  useEffect(() => {
    fetchCard(token);
    fetchAddresses();
  }, [token, fetchCard, fetchAddresses]);

  return (
    <Main>
      <MapboxMap />
      {order ? (
        <Order
          handleOrder={handleOrder}
          fetchOrder={fetchOrder}
          history={history}
          addresses={addresses}
          error={error}
        />
      ) : (
        <PopUp handleOrder={handleOrder} />
      )}
    </Main>
  );
}

const mapStateToProps = (state) => ({
  addresses: state.addresses.addresses,
  error: state.card.error,
  token: state.user.token,
});
const mapDispatchToProps = (dispatch) => ({
  fetchOrder: (props) => dispatch(fetchOrder(props)),
  fetchCard: (props) => dispatch(fetchCard(props)),
  fetchAddresses: (props) => dispatch(fetchAddresses()),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Map);
