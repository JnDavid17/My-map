import React from "react";
import Map  from "./Map";
import { CreateStores } from "./CreateStores";

const mapURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBSs_mFCYVx7GVn-idDEaKwEzsa66MaR0s&callback=initMap&v=weekly"
function App() {
  return (
    <React.Fragment>
      <Map/>
    </React.Fragment>
  );
}

export default App;
