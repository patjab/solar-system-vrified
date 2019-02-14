import React, { Component } from "react";
import { setCurrentRoom } from "../actions/actions";
import { connect } from "react-redux";
import "../styles/App.css";

class RoomSelection extends Component {
  constructor(props) {
    super(props);
    this.rooms = [
      {
        id: 1,
        name: "Room 1",
        imgSrc:
          "https://cdn.cnn.com/cnnnext/dam/assets/190204103724-warped-milky-way-illustration-exlarge-169.jpg"
      },
      {
        id: 2,
        name: "Room 2",
        imgSrc:
          "https://cdn.cnn.com/cnnnext/dam/assets/190110215131-large-magellanic-cloud-exlarge-169.jpg"
      },
      {
        id: 3,
        name: "Room 3",
        imgSrc:
          "https://cdn.cnn.com/cnnnext/dam/assets/181213141308-comet-46p-wirtanen-exlarge-169.jpg"
      },
      {
        id: 4,
        name: "Room 4",
        imgSrc:
          "https://cdn.cnn.com/cnnnext/dam/assets/181128150031-wonders-of-the-universe-young-stars-exlarge-169.jpg"
      }
    ];
  }

  render() {
    return (
      <>
        <header className="App-header">
          <p>VRify the Solar System</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Antu_kstars_solarsystem.svg/2000px-Antu_kstars_solarsystem.svg.png"
            className="App-logo"
            alt="logo"
          />
        </header>
        <div id="room-list">
          {this.rooms.map(room => (
            <div
              className="room-image"
              key={room.id}
              onClick={() => this.props.setCurrentRoom(room.id)}
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
