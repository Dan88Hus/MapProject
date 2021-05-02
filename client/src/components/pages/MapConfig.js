import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class MapConfig extends Component {
  
  static defaultProps = {
    center: {
      lat: 39.92077,
      lng: 32.85411
    },
    userLat: localStorage.getItem("UserLat"),
    userLon: localStorage.getItem("UserLon"),
    zoom: 14
  };

 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBiEdWxbdHakiNJpHy5op67-VGF2Spp1L4" }}
          // key value is hard coded, usually it can be hiden under .env file
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent style={{color: "red"}}
            lat={this.props.userLat}
            lng={this.props.userLon}
            text="User Input Coordinate"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default MapConfig;