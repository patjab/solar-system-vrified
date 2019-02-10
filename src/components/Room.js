import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class Room extends Component {
  constructor (props) {
    super(props)
    this.gravitationalConstant = 0.00000000006673
    this.state = {
      time: 0,
      planets: [
        { color: 'red', radius: 2, startingPt: 0 },
        { color: 'blue', radius: 3, startingPt: 0.9 }
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
      })
    }, 30)
  }

  render () {
    return (
      <>
        <Button onClick={this.handleButtonClick}>
          <span className='icon-bar' />
          <span className='icon-bar' />
          <span className='icon-bar' />
        </Button>
        <a-scene>
          <a-camera cursor position='0 0 5' />
          <a-sky color='black' />
          <a-entity id='sun'>
            <a-entity position='0 0 -5'>
              <a-entity id='sun'>
                <a-sphere
                  radius='1'
                  position='0 0 0'
                  rotation='0 0 0'
                  color='yellow'
                />
                <a-animation
                  attribute='rotation'
                  to='0 360 0'
                  dur='4000'
                  easing='linear'
                  repeat='indefinite'
                />
              </a-entity>

              {this.state.planets.map(planet => (
                <a-entity id='planet'>
                  <a-sphere
                    radius='0.2'
                    color={planet.color}
                    position={`${planet.radius * Math.cos(this.state.time) +
                      planet.startingPt} ${0} ${planet.radius *
                      Math.sin(this.state.time) +
                      planet.startingPt}`}
                  >
                    <a-animation
                      attributes='rotation'
                      to='0 360 0'
                      dur='4000'
                      easing='linear'
                      repeat='indefinite'
                    />
                  </a-sphere>
                  <a-animation
                    attribute='rotation'
                    to='0 360 0'
                    dur='112000'
                    easing='linear'
                    repeat='indefinite'
                  />
                </a-entity>
              ))}
            </a-entity>
            <a-animation
              attribute='rotation'
              to='0 360 0'
              dur='100000'
              easing='linear'
              repeat='indefinite'
            />
          </a-entity>
        </a-scene>
      </>
    )
  }
}

export default Room
