import React from 'react';
import { connect } from 'react-redux';
import Room from './Room';
import { sendOffer, sendAnswer, onJoin } from '../actions/actions';

class RoomConnectionContainer extends React.Component {

    componentDidMount() {
        console.log(this.props.initialHandshake)
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
        this.props.onJoin(this.props.currentRoom.name);


        // console.log(this.myConnection.createOffer)
        // this.myConnection.createOffer(offer => {
        //     this.myConnection.setLocalDescription(offer);
        //     this.props.sendOffer(offer);
        // }, console.log);
    }

    componentDidUpdate() {
        console.log(this.props.initialHandshake)
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
        signalingConnection: state.signalingConnection,
        initialHandshake: state.initialHandshake
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onJoin: (roomName) => { dispatch(onJoin(roomName)) },
        sendOffer: (offer) => { dispatch(sendOffer(offer)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RoomConnectionContainer);