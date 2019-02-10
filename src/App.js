import React, { Component } from 'react';
// import Room from './components/Room.js';
import logo from './logo.svg';
import './styles/App.css';

class App extends Component {
  render() {
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

export default App;
