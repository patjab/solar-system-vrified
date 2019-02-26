import React from 'react';
import { connect } from 'react-redux';
import Room from './Room';
import { sendOffer, sendAnswer, onJoin } from '../actions/actions';

class RoomConnectionContainer extends React.Component {

    setupConnectionListeners = () => {
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
    }

    setupDataChannel = () => {
        const config = {
            reliable: true
        };

        this.dataChannel = this.myConnection.createDataChannel('myDataChannel', config);
        this.props.onJoin(this.props.currentRoom.name);
    }

    componentDidMount() {
        this.setupConnectionListeners();
        this.setupDataChannel();
    }

    componentDidUpdate(prevProps) {
        if ( prevProps.offer !== this.props.offer && this.props.offer === false ) {
            console.log('change in offer, needs an offer');
            this.myConnection.createOffer(offer => {
                this.myConnection.setLocalDescription(offer);
                this.props.sendOffer(offer, this.props.currentRoom.name);
            }, console.log);
        }

        if ( prevProps.offer !== this.props.offer && this.props.offer !== false ) {
            this.myConnection.setRemoteDescription(new RTCSessionDescription(this.props.offer));
            console.log('setting offer, sending an answer');
            
            this.myConnection.createAnswer(answer => {
                this.myConnection.setLocalDescription(answer);
                this.props.sendAnswer(answer, this.props.currentRoom.name);
            }, console.log);
        }

        if ( prevProps.answer !== this.props.answer && !!this.props.answer ) {
            this.myConnection.setRemoteDescription(new RTCSessionDescription(this.props.answer));
            console.log('ANSWER', this.myConnection);
        }
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
        offer: state.offer,
        answer: state.answer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onJoin: (roomName) => { dispatch(onJoin(roomName)) },
        sendOffer: (offer, roomName) => { dispatch(sendOffer(offer, roomName)) },
        sendAnswer: (answer, roomName) => { dispatch(sendAnswer(answer, roomName)) },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RoomConnectionContainer);