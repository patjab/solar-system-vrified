import React, { Component } from 'react'
import { Button, Menu, Segment, Sidebar } from 'semantic-ui-react'
import SidebarItems from './SidebarItems.js'

class Room extends Component {
  constructor (props) {
    super(props)
    this.gravitationalConstant = 0.00000000006673
    this.state = {
      time: 0,
      planets: [
        { color: 'red', radius: 2, startingPt: 0 },
        { color: 'blue', radius: 3, startingPt: 0.9 }
      ],
      visible: false
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

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  render () {
    const { visible } = this.setState
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={visible}
          width='thin'
        >
          <SidebarItems
            addPrimitive={this.addPrimitive}
            removeAllUserAdded={this.removeAllUserAdded}
            addText={this.addText}
            addText2={this.addText2}
            handleColorPicker={this.colorHandler}
          />
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            <Button onClick={this.handleButtonClick} className='scene-button'>
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
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

export default Room
