import React from "react";
import { withStyles } from "@material-ui/core/styles";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmFyZGVuYWRhbXMiLCJhIjoiY2todjkwMG43MWZhOTJxbnBsbXlyN2d4dSJ9.5CwSSY90nXLRcD-YGXrVwQ";

const useStyles = (theme) => ({
  root: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    "@global": {
      ".mapboxgl-ctrl-bottom-right": {
        display: "none",
      },
      ".mapboxgl-ctrl-bottom-left": {
        display: "none",
      },
    },
  },
});

class MapboxMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 20,
      lat: 40,
      zoom: 1.5,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <div ref={(el) => (this.mapContainer = el)} className={classes.root} />
      </>
    );
  }
}
export default withStyles(useStyles, { withTheme: true })(MapboxMap);
