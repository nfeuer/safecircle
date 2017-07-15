import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';

import ButtonAppBar from './ButtonAppBar';
import FloatingActionButtons from './FloatingActionButtons';
import Card from './Card';

import retailers from './retailers.json';
console.log(retailers);

let map, heatmap, marker;

class App extends Component {

  constructor(props) {
    super(props);

    this.current = window.location.search.match(/current=([^&]+)/) ? window.location.search.match(/current=([^&]+)/).pop() : 'index';
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div className="title-bar">
            <ButtonAppBar />
          </div>
          {
            this.current === 'index' ? this._renderCardList() :
            this.current === 'map' ? this._renderMap() :
            null
          }
          {
            this.current === 'index' ? (
              <FloatingActionButtons />
            ) : null
          }
        </div>
      </MuiThemeProvider>
    );
  }

  _renderCardList() {
    return (
      <div className="class-list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }

  _renderMap() {
    let script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD0jwkW9fNqVvAqG-805SXH3s4yk5DlPXU&libraries=visualization&callback=initMap';
    document.body.appendChild(script);

    return (
      <div className="map">
        <div id="map">loading map...</div>
      </div>
    );
  }

}

window.initMap = function() {
  navigator.geolocation.getCurrentPosition(showMap);
}

function showMap(pos) {
  var center = {
    lat: pos.coords.latitude,
    lng: pos.coords.longitude 
  };

  map = new window.google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: center
  });

  new window.google.maps.Marker({
    position: center,
    map: map,
    icon: 'http://www.robotwoods.com/dev/misc/bluecircle.png'
  });

  for (let i = 0; i < retailers.length; i++) {
    new window.google.maps.Marker({
      position: retailers[i],
      map: map
    });
  }
}

function getPoints(center) {
  var res = [];
  for (var i = 0; i < 1000; i++) {
    var newLat = center.lat + Math.random() / 100 * (Math.random() < 0.5 ? -1 : 1);
    var newLng = center.lng + Math.random() / 100 * (Math.random() < 0.5 ? -1 : 1);

    res.push(new window.google.maps.LatLng(newLat, newLng));
  }

  return res;
}

export default App;