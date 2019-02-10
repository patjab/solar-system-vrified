import React, { Component } from 'react';
// import Room from './components/Room.js';
import logo from './logo.svg';
import './styles/App.css';
import  { toggleIsInArea } from  './actions/actions';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    const success = (pos) => {
      const crd = pos.coords;

      console.log(crd)
      const isValidLatitude =  40.7814800 <= crd.latitude &&  40.781667899999995 >= crd.latitude;
      const isValidLongitude = -73.9734322 <= crd.longitude &&  -73.9731792 >= crd.longitude;

      console.log(isValidLatitude)
      console.log(isValidLongitude)

      if ( !this.props.isInArea && isValidLatitude && isValidLongitude ) {
        this.props.toggleIsInArea(true);
      } else if ( this.props.isInArea && (!isValidLatitude || !isValidLongitude) ) {
        this.props.toggleIsInArea(false);
      }
      
    };

    this.watchPositionRef = navigator.geolocation.watchPosition(success);
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchPositionRef);
  }

  

  render() {

    console.log(this.props.isInArea);
    return (
      <div className="App">
        <header className="App-header">
          <p>
            VRify the Solar System
          </p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Antu_kstars_solarsystem.svg/2000px-Antu_kstars_solarsystem.svg.png" className="App-logo" alt="logo" />

          <p>
            Select Your Universe
          </p>

          <div id='room-list'>
            <img id='room-image' src="https://cdn.cnn.com/cnnnext/dam/assets/190204103724-warped-milky-way-illustration-exlarge-169.jpg" />
            <img id='room-image' src="https://cdn.cnn.com/cnnnext/dam/assets/190110215131-large-magellanic-cloud-exlarge-169.jpg" />
            <img id='room-image' src="https://cdn.cnn.com/cnnnext/dam/assets/181213141308-comet-46p-wirtanen-exlarge-169.jpg" />
            <img id='room-image' src="https://cdn.cnn.com/cnnnext/dam/assets/181128150031-wonders-of-the-universe-young-stars-exlarge-169.jpg" />
          </div>




        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isInArea: state.isInArea
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    toggleIsInArea: (isInArea) => dispatch(toggleIsInArea(isInArea))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
