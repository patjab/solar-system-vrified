import React, { Component } from 'react';
import RoomSelection from './RoomSelection';
import Room from './Room';
import { connect } from 'react-redux';


class RoomContainer extends Component {
    render() {
        return (
            this.props.currentRoom ? 
                <Room currentRoom={this.props.currentRoom} />
            :
                <RoomSelection/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentRoom: state.currentRoom
    }
}

export default connect(mapStateToProps)(RoomContainer);