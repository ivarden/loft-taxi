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
    // this.map = null;
    this.mapContainer = React.createRef();
    this.state = {
      lng: -123.116226,
      lat: 49.246292,
      zoom: 10,
    };
  }

  componentDidMount() {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      // center: [this.state.lng, this.state.lat],
      center: [30.3609, 59.9311],
      zoom: this.state.zoom,
      width: "100vw",
      height: "100vh",
    });

    const nav = new mapboxgl.NavigationControl({
      showCompass: true,
    });
    this.map.addControl(nav, "bottom-right");
    
    this.map.on(this.load, function () {
      this.map.addSource(this.route, {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: [
              [30.272182, 59.800652],
              [30.274046, 59.800365],
              [30.275146, 59.800365],
              [30.280516, 59.797192],
              [30.317898, 59.790894],
              [30.324347, 59.793816],
              [30.32362, 59.806255],
              [30.323389, 59.812008],
              [30.334572, 59.810379],
              [30.3368, 59.810448],
              [30.35289, 59.81477],
              [30.370289, 59.815208],
              [30.379545, 59.81636],
              [30.380919, 59.818024],
              [30.361811, 59.855789],
              [30.341515, 59.894806],
              [30.339552, 59.90173],
              [30.360826, 59.930965],
              [30.326199, 59.935318],
              [30.328283, 59.940693],
              [30.324488, 59.941109],
              [30.322104, 59.942886],
              [30.316589, 59.940495],
              [30.316273, 59.940578],
            ],
          },
        },
      });
      this.map.addLayer({
        id: "route",
        type: "line",
        source: "route",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#ee0909",
          "line-width": 8,
        },
      });
      return this.map
    });
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
export default withStyles(useStyles, { withTheme: true })(MapboxMap);
