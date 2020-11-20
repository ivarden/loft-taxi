import React from "react";
import point from "./map_point.svg";

export default function Point() {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        right: "20px",
        bottom: "20px",
        padding: "10px",
        borderRadius: "50%",
        backgroundColor: "white",
        boxShadow: "0px 0px 30px 0px #000000 15%",
        cursor:'pointer'
      }}
    >
      <img src={point} alt="map point" />
    </div>
  );
}
