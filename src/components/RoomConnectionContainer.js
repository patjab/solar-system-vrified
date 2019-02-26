import React from 'react';
import { connect } from 'react-redux';
import Room from './Room';
import { sendOffer, sendAnswer } from '../actions/actions';

class RoomConnectionContainer extends React.Component {

    componentDidMount() {
        console.log('component did mount')
        const configuration = {
            iceServers: [
                {
                    url: 'stun:stun.1.google.com:19302'
                }
            ]
        };
        this.myConnection = new RTCPeerConnection(configuration);

        this.myConnection.onicecandidate = (e) => {
            if ( e.candidate ) {
                console.log("WOAH A CANDIDATE")
            }
        }

        this.myConnection.ondatachannel = (e) => {
            e.channel.onmessage = (data) => {
                console.log("WOAH A MESSAGE")
            }
        }

        const config = {
            reliable: true
        };

        this.dataChannel = this.myConnection.createDataChannel('myDataChannel', config);

        console.log(this.myConnection.createOffer)
        this.myConnection.createOffer(offer => {
            this.myConnection.setLocalDescription(offer);
            this.props.sendOffer(offer);
        }, console.log);
    }

    render() {
        console.log('rendering')
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
        sendOffer: (offer) => { dispatch(sendOffer(offer)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RoomConnectionContainer);