import React, { Component } from "react";
import RoomSelection from "./RoomSelection";
import RoomConnectionContainer from './RoomConnectionContainer';
import { addPlanet } from '../actions/actions';
import { connect } from "react-redux";

class RoomContainer extends Component {
  render() {
    return this.props.currentRoom ? (
      <RoomConnectionContainer 
        currentRoom={this.props.currentRoom}
        planets={this.props.planets}
        addPlanet={this.props.addPlanet}
      />
    ) : (
      <RoomSelection />
    );
  }
}

const mapStateToProps = state => {
  return {
    currentRoom: state.currentRoom,
    planets: state.planets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPlanet: planet => dispatch(addPlanet(planet))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomContainer);
