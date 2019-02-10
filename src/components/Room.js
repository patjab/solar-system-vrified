import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class Room extends Component {
  constructor(props) {
    super(props);
    this.gravitationalConstant = 0.00000000006673;
    this.randomColor = [ 'red', 'orange', 'yellow', 'green', 'blue', 'violet'];
    this.state = {
      time: 0,
      planets: [
        { color: 'red', radius: 2, startingPt: 0, timeOffset: 0 },
        { color: 'blue', radius: 3, startingPt: 0.9, timeOffset: 0 }
      ]
    }
    this.r = 5
  }

  gravity = (m1, m2, r) => {
    return (0.00000000006673 * m1 * m2) / Math.pow(r, 2)
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({
        time: this.state.time + 0.01
      });
    }, 30);

    window.addEventListener('keydown', (e) => {
      if ( e.key === 'p' ) {
        const newPlanet = {
          color: this.randomColor[Math.trunc(Math.random()*this.randomColor.length)],
          radius: Math.random()*3,
          startingPt: 0,
          timeOffset: Math.random()+500000
        };
        this.setState({ planets: [...this.state.planets, newPlanet ] }, () => { console.log(this.state.planets) })
      }
    });
  }

  render () {
    return (
      <a-scene>
             <a-camera cursor position="0 0 5"></a-camera>
             <a-sky color="black"></a-sky>
             <a-entity id="sun">
                 <a-entity position="0 0 -5">
                     <a-entity id="sun">
                         <a-sphere radius="1"
                             position="0 0 0"
                             rotation="0 0 0"
                             color="yellow">
                         </a-sphere>
                         <a-animation attribute="rotation"
                             to="0 360 0"
                             dur="4000"
                             easing="linear"
                             repeat="indefinite"></a-animation>
                     </a-entity>

                    {
                       this.state.planets.map(planet => (
                       <a-entity id="planet">
                          <a-sphere radius="0.2" color={planet.color} position={`${(planet.radius * Math.cos(this.state.time + planet.timeOffset)) + planet.startingPt} ${0} ${planet.radius * Math.sin(this.state.time + planet.timeOffset) + planet.startingPt}`}>
                              <a-animation attributes="rotation"
                                  to="0 360 0"
                                  dur="4000"
                                  easing="linear"
                                  repeat="indefinite"></a-animation>
                          </a-sphere>
                          <a-animation attribute="rotation"
                              to="0 360 0"
                              dur="112000"
                              easing="linear"
                              repeat="indefinite"></a-animation>
                        </a-entity>)) 
                    }
                 </a-entity>
                 <a-animation attribute="rotation"
                     to="0 360 0"
                     dur="100000"
                     easing="linear"
                     repeat="indefinite"></a-animation>
             </a-entity>
         </a-scene>
    );
  }
}

export default Room
