import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = "pk.eyJ1IjoiamFnYWRoZWVzaDYiLCJhIjoiY2s3aXo4MTBlMG5xdDNrbHB1OXZ4NGdnNSJ9.BmItdc7_NyDeeUsFMNL2kA";

class Map extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lng: this.props.long,
      lat: this.props.lat,
    // lng:2.3522 ,
    // lat:48.8566,
      zoom: 9
    }
  }

  // componentDidUpdate(prevprops){
  //   if(prevprops !== this.props ){
  //     this.refreshMap()
  //   }
  // }

  // refreshMap = () => {
  //   this.setState({lat:this.props.lat,lng:this.props.long})
  // }

  componentDidMount = () => {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: 9
    });

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render = () => {
    return (
      <div>
        <div ref={el => this.mapContainer = el} className='mapContainer' />
      </div>
    )
  }
}

export default Map