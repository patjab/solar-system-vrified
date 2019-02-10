import React, { Component } from 'react';

class RoomContainer extends Component {
    render() {
        {
            this.props.currentRoom ? 
                <Room />
            :
                <RoomSelection/>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        currentRoom: state.currentRoom
    }
}

export default connect(mapStateToProps)(RoomContainer);