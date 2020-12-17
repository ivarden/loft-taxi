import React from "react";
import { withStyles } from "@material-ui/core/styles";
import mapboxgl from "mapbox-gl";
import { drawRoute } from "./drawRoute";
import { compose } from "lodash/fp";
import { connect } from "react-redux";

const useStyles = (theme) => ({
  root: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 1,
    "@global": {
      ".mapboxgl-ctrl-attrib-inner, .mapboxgl-ctrl-attrib": {
        display: "none",
      },
      ".mapboxgl-ctrl-bottom-left": {
        display: "none",
      },
      ".mapboxgl-ctrl-bottom-right": {
        display: "block",
        right: 0,
        bottom: 0,
      },
    },
  },
  wrap: {
    width: "100%",
    height: "100%",
  },
});

class MapboxMap extends React.Component {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef();
    this.map = null;
    this.state = {
      lng: 30.3609,
      lat: 59.9311,
      zoom: 10,
    };
  }

  map_ = () => {
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
      width: "100vw",
      height: "100vh",
    });

    const nav = new mapboxgl.NavigationControl({
      showCompass: true,
    });
    this.map.addControl(nav, "top-right");
    return this.map;
  };

  componentDidMount() {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
    this.map_();
    this.map.on("load", () => {
      drawRoute(this.map, [[this.state.lng, this.state.lat]]);
      // drawRoute(this.map, this.props.route || [[this.state.lng, this.state.lat]]);
    });
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.route) !== JSON.stringify(this.props.route)) {
      this.map_();
      this.map.on("load", () => {
        drawRoute(this.map, this.props.route);
      });
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrap}>
        <div
          data-testid="map"
          ref={this.mapContainer}
          className={classes.root}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  route: state.order.route,
});

export default compose(
  connect(mapStateToProps, null),
  withStyles(useStyles, { withTheme: true })
)(MapboxMap);
