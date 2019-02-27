import React from 'react';
import { connect } from 'react-redux';
import Room from './Room';
import { onJoin, sendOffer, sendAnswer, sendCandidate } from '../actions/actions';

class RoomConnectionContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rtcDataChannel: null
        };
    }

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
                this.props.sendCandidate(e.candidate, this.props.currentRoom.name);
            }
        }

        this.myConnection.ondatachannel = (e) => {
            console.log('RECEIVED A DATA CHANNEL RECEIVED A DATA CHANNEL RECEIVED A DATA CHANNEL RECEIVED A DATA CHANNEL ');

            // TODO: Find middleware for this
            this.setState({ rtcDataChannel: this.dataChannel }, () => {
                e.channel.onmessage = (data) => {
                    const receivedPlanet = JSON.parse(data.data);
                    console.log('WOAH A PLANET', receivedPlanet);

                    // MAKE PAYLOAD IN THIS FORMAT color, radius, stPt, timeOff 

                    // TODO: Move this one level below
                    this.props.addPlanet(receivedPlanet);
                }
            });

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

    componentDidUpdate(prevProps, prevState) {
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

        if ( prevProps.candidate !== this.props.candidate && !!this.props.candidate ) {
            this.myConnection.addIceCandidate(new RTCIceCandidate(this.props.candidate));
            console.log('SUCCESSFULLY ADDED CANDIDATE');
        }
    }

    render() {
        return (
            <Room 
                currentRoom={this.props.currentRoom}
                planets={this.props.planets}
                addPlanet={this.props.addPlanet}
                rtcDataChannel={this.state.rtcDataChannel}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        offer: state.offer,
        answer: state.answer,
        candidate: state.candidate
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onJoin: (roomName) => { dispatch(onJoin(roomName)) },
        sendOffer: (offer, roomName) => { dispatch(sendOffer(offer, roomName)) },
        sendAnswer: (answer, roomName) => { dispatch(sendAnswer(answer, roomName)) },
        sendCandidate: (candidate, roomName) => { dispatch(sendCandidate(candidate, roomName)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RoomConnectionContainer);