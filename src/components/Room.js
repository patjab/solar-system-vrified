import React, { Component } from "react";
import { Button, Menu, Segment, Sidebar } from "semantic-ui-react";
import SidebarItems from "./SidebarItems.js";
import Sky from "../stars.png";
import Sol from "../sol.jpg";
import Jupiter from "../jupiter.jpg";
import Neptune from "../neptuno.jpg";
import Saturn from "../saturno.png";
import Pluto from "../pluton.jpg";
import Uranus from "../urano.jpg";

class Room extends Component {
  constructor(props) {
    super(props);
    this.gravitationalConstant = 0.00000000006673;
    this.state = {
      time: 0,
      visible: false
    };
    this.r = 5;
  }

  gravity = (m1, m2, r) => {
    return (0.00000000006673 * m1 * m2) / Math.pow(r, 2);
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: this.state.time + 0.01
      });
    }, 30);

    window.addEventListener('keydown', e => {
      if (e.key === 'p') {
        this.props.addPlanet();

        const dataChannel = this.props.rtcDataChannel;
        const planets = this.props.planets;

        if ( dataChannel ) {
          dataChannel.send(JSON.stringify(planets[planets.length-1]));
        }
      }
    });
  }

  toggleMenu = () => {
    this.setState({ visible: !this.state.visible });
  };

  closeMenu = () => {
    if (this.state.visible) {
      this.toggleMenu();
    }
  };

  render() {
    const { visible } = this.state;
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={visible}
          width="thin"
        >
          <SidebarItems
            addPrimitive={this.addPrimitive}
            removeAllUserAdded={this.removeAllUserAdded}
            addText={this.addText}
            addText2={this.addText2}
            handleColorPicker={this.colorHandler}
            addPlanet={this.props.addPlanet}
          />
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            <Button onClick={this.toggleMenu} className="scene-button">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </Button>
            <a-scene onClick={this.closeMenu}>
              <a-assets>
                <img id="sky" src={Sky} alt="start-bg" />
                <img id="sun" src={Sol} alt="sun" />
                <img id="jupiter" src={Jupiter} alt="jupiter" />
                <img id="neptune" src={Neptune} alt="neptune" />
                <img id="pluto" src={Pluto} alt="pluto" />
                <img id="saturn" src={Saturn} alt="saturn" />
                <img id="uranus" src={Uranus} alt="uranus" />
              </a-assets>
              <a-camera cursor position="0 0 5" />
              <a-sky color="black" />
              <a-sphere
                id="sky"
                radius="100"
                position="0 0 0"
                rotation="0 90 0"
                src="#sky"
                color="#333333"
                material="side: double;"
              />
              <a-entity id="sun">
                <a-entity position="0 0 -5">
                  <a-entity id="sun">
                    <a-sphere
                      radius="1"
                      position="0 0 0"
                      rotation="0 0 0"
                      color="yellow"
                      src="#sun"
                    />
                    <a-animation
                      attribute="rotation"
                      to="0 360 0"
                      dur="4000"
                      easing="linear"
                      repeat="indefinite"
                    />
                  </a-entity>
                  <a-entity
                    position="-0.25 1 8"
                    text="anchor: right; width: 1.5; color: white; value: [KEPLER'S LAW OF ELLIPSES] All planets orbit the sun in a path that resembles an ellipse."
                  />
                  <a-entity
                    position="0.25 1 8"
                    text="anchor: left; width: 1.5; color: white; value: [KEPLER'S LAW OF EQUAL AREAS] A planet moves fastest when it is closest to the sun and slowest when it is furthest from the sun."
                  />
                  {this.props.planets.map(planet => (
                    <a-entity id="planet">
                      <a-sphere
                        radius="0.2"
                        src={planet.color}
                        position={`${planet.radius *
                          Math.cos(this.state.time + planet.timeOffset) +
                          planet.startingPt} ${0} ${planet.radius *
                          Math.sin(this.state.time + planet.timeOffset) +
                          planet.startingPt}`}
                      >
                        <a-animation
                          attributes="rotation"
                          to="0 360 0"
                          dur="4000"
                          easing="linear"
                          repeat="indefinite"
                        />
                      </a-sphere>
                      <a-animation
                        attribute="rotation"
                        to="0 360 0"
                        dur="112000"
                        easing="linear"
                        repeat="indefinite"
                      />
                    </a-entity>
                  ))}
                </a-entity>
                <a-animation
                  attribute="rotation"
                  to="0 360 0"
                  dur="100000"
                  easing="linear"
                  repeat="indefinite"
                />
              </a-entity>
            </a-scene>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default Room;
