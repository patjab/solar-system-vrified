import * as React from 'react';
import Room from './Room';

class RTCContainer extends React.Component {
    render() {
        return (
            <Room 
                currentRoom={this.props.currentRoom}
                planets={this.props.planets}
                addPlanet={this.props.addPlanet}
            />
        );
    }
}

export default RTCContainer;