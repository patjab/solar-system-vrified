import React, { Component } from 'react';
import RoomContainer from './components/RoomContainer';
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
          {
            this.props.isInArea ? 
              <RoomContainer />
              :
              'Go away'
          }
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
