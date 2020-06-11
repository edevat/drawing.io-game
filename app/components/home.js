import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-spinkit';
import SocketIOClient from "socket.io-client";

const { width, height } = Dimensions.get('window');

class Home extends Component {
    constructor() {
        super();

        this.state = {
        };
    }

    componentWillMount() {
        this.socket = SocketIOClient('https://rhubarb-cake-89877.herokuapp.com/');
        this.socket.on('roomsListInSocket', this.getRooms);
        
    }

    getRooms = (rooms) => {
        console.log("a geldi");
        
        console.log(rooms.socketData);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {this.socket.emit('subscribeRoom', "123");}}><Text>Home</Text></TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 20
    },
});

const mapStateToProps = state => {
    return {
    };
};


export default connect(mapStateToProps,
    {
    })(Home);
