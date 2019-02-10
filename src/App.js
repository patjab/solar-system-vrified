import React, { Component } from 'react'
import './styles/App.css'
import { Route, Switch, withRouter } from 'react-router-dom'
import Home from './components/home';
import SolarSystem from './components/SolarSystem'

class App extends Component {
  render () {
    return (
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/solarsystem' component={SolarSystem} />
        {/* <Route path="/signup" render={() => {
            return (
              <ImageFade />
              // <p>placeholder for signup</p>
              // <Signup />
            )
          }} /> */}
      </Switch>
    )
  }
}

export default withRouter(App)
