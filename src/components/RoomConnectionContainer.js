import * as React from 'react';
import { connect } from 'react-redux';
import Room from './Room';
import { setConnection } from '../actions/actions'

class RTCContainer extends React.Component {

    componentDidMount() {
        console.log(this.props.signalingConnection);
        this.props.setConnection();
        console.log(this.props.signalingConnection);
    }

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

const mapStateToProps = (state) => {
    return {
        signalingConnection: state.signalingConnection
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setConnection: () => dispatch(setConnection())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RTCContainer);