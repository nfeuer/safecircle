import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';

import ButtonAppBar from './ButtonAppBar';
import FloatingActionButtons from './FloatingActionButtons';
import Posting from './posting';
import Card from './CircleCard';
import Card2 from './CircleCard2';
import Card3 from './CircleCard3';

import retailers from './retailers.json';

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
            this.current === 'posting' ? <Posting/> :
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
        <Card2 />
        <Card3 />
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

  let prev = null;
  let infowindows = {};
  for (let i in retailers) {
    (() => {
      let key = i;
      let marker = new window.google.maps.Marker({
        position: {lat: retailers[key].lat, lng: retailers[key].lng},
        map: map
      });

      marker.addListener('click', () => {
        if (prev != null) {
          prev.close();
        }

        prev = new window.google.maps.InfoWindow({
          content: `Services: ${retailers[key].services.length > 0 ? generateIcons(retailers[key].services) : 'no data'}`
        });
        prev.open(map, marker);
      });
    })();
  }
}

function generateIcons(services) {
  let p = '<p>';

  for (let i = 0; i < services.length; i++) {
    if (services[i] === 'Postal') {
      p += '<i class="material-icons" title="Postal">mail</i>';
    }

    if (services[i] === 'Phamacy') {
      p += '<i class="material-icons" title="Phamacy">accessibility</i>';
    }

    if (services[i] === 'Notary') {
      p += '<i class="material-icons" title="Notary">accessible</i>';
    }

    if (services[i] === 'Grocery') {
      p += '<i class="material-icons" title="Grocery">account_balance</i>';
    }

    if (services[i] === 'Deli') {
      p += '<i class="material-icons" title="Deli">account_balance_wallet</i>';
    }

    if (services[i] === 'Job Openings') {
      p += '<i class="material-icons" title="Job Openings">account_box</i>';
    }

    if (services[i] === 'International Calling') {
      p += '<i class="material-icons" title="International Calling">add_shopping_cart</i>';
    }

    if (services[i] === 'Money Transfer') {
      p += '<i class="material-icons" title="Money Transfer">card_travel</i>';
    }
  }

  p += '</p>'
  return p;
}

export default App;