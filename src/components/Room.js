import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class Room extends Component {
  constructor (props) {
    super(props)
    this.gravitationalConstant = 0.00000000006673
    this.state = {
      x: 100,
      y: 0,
      z: 0,
      time: 0
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
    const x = 2 * Math.cos(this.state.time)
    const z = 2 * Math.sin(this.state.time)
    // console.log(x)

    const x2 = 3 * Math.cos(this.state.time)
    const z2 = 3 * Math.sin(this.state.time)

    return (
      <>
        <Button onClick={this.handleButtonClick}>
          <span className='icon-bar' />
          <span className='icon-bar' />
          <span className='icon-bar' />
        </Button>
        <a-scene>
          <a-camera cursor position='0 0 0' />
          <a-sky color='black' />
          <a-entity id='sun'>
            <a-entity position='0 0 -5'>
              <a-entity id='earth'>
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

              <a-entity id='planet'>
                <a-sphere radius='0.2' color='blue' position={`${x} ${0} ${z}`}>
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

              <a-entity id='planet2'>
                <a-sphere
                  radius='0.2'
                  color='red'
                  position={`${1.1 * x2 + 0.9} ${0} ${1.1 * z2}`}
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
