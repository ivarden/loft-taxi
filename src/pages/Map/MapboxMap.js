import React from "react";
import { withStyles } from "@material-ui/core/styles";
import mapboxgl from "mapbox-gl";

const useStyles = (theme) => ({
  root: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 1,
    "@global": {
      ".mapboxgl-ctrl-bottom-right": {
        display: "none",
      },
      ".mapboxgl-ctrl-bottom-left": {
        display: "none",
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
    this.map = null;
    this.mapContainer = React.createRef();
    this.state = {
      lng: 20,
      lat: 40,
      zoom: 1.5,
    };
  }

  componentDidMount() {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
  }

  // componentWillUnmount() {
  //   this.map.remove();
  // }

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
export default withStyles(useStyles, { withTheme: true })(MapboxMap);
