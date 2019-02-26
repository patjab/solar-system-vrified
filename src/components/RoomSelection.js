import React, { Component } from 'react';
import { setCurrentRoom } from '../actions/actions';
import { connect } from 'react-redux';
import { RoomList } from '../config/RoomList'
import "../styles/App.css";

class RoomSelection extends Component {
  constructor(props) {
    super(props);
    this.rooms = RoomList;
  }

  render() {
    return (
      <>
        <header className={'App-header'}>
          <p>VRify the Solar System</p>
          <img
            src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Antu_kstars_solarsystem.svg/2000px-Antu_kstars_solarsystem.svg.png'}
            className={'App-logo'}
            alt={'logo'}
          />
        </header>
        <div id={'room-list'}>
          {this.rooms.map(room => (
            <div
              className={'room-image'}
              key={room.id}
              onClick={() => this.props.setCurrentRoom(room)}
            >
              <h4>{room.name}</h4>
              <img src={room.imgSrc} alt={room.name} />
            </div>
          ))}
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentRoom: currentRoom => dispatch(setCurrentRoom(currentRoom))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(RoomSelection);
