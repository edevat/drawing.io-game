import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Button,
    Alert
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
import Spinner from 'react-native-spinkit';
import SocketIOClient from "socket.io-client";
import TopButton from './common/topButton';

const { width, height } = Dimensions.get('window');
class Estimated extends Component {
    constructor() {
        super();

        this.state = {
            is_waiting: false,
            gelenLoc: {}
        };
    }

    componentWillMount() {
        this.socket = SocketIOClient('https://rhubarb-cake-89877.herokuapp.com/');
        this.socket.on('pathOutput', this.getDrawingData);
        this.socket.on('clearOutput', this.getClearData);
        this.socket.on('undoOutput', this.getUndoData);
    }

    onSendPath = (path) => {
        this.socket.emit('pathInput', path);
        /*{
            "drawer": null,
            "path": {
                "color": "#000000FF",
                "data": [
                    "155.13,169.4",
                    "158.71,177.99",
                    "157.99,180.1",
                    "159.42,180.83",
                    "162.99,183.69",
                    "162.27,185.12",
                    "164.91,189.42",
                    "170.85,222.26"
                ],
                "id": 94247558,
                "width": 5
            },
            "size": {
                "height": 618.8571166992188,
                "width": 371.4285583496094
            }
        }*/
    }

    onSendClear = () => {
        this.socket.emit('clearInput', "");
    }

    onSendUndo = (pathID) => {
        this.socket.emit('undoInput', pathID);
    }

    getDrawingData = (path) => {
        console.log(path);
        this.canvas1.addPath(path.socketData);
    }

    getClearData = () => {
        this.canvas1.clear();
    }

    getUndoData = (pathID) => {
        this.canvas1.undo(pathID.socketData);
    }

    render() {
        return (
            <View style={styles.container}>
                <Spinner
                    style={styles.spinner}
                    isVisible={this.state.is_waiting}
                    size={75}
                    type={"WanderingCubes"}
                    color={"#549eff"}
                />

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <RNSketchCanvas
                        ref={ref => this.canvas1 = ref}
                        onStrokeEnd={(path) => {
                            this.onSendPath(path);
                        }}
                        onClearPressed={() => {
                            this.onSendClear();
                        }}
                        onUndoPressed={(pathID) => {
                            this.onSendUndo(pathID);
                        }}
                        containerStyle={{ backgroundColor: 'transparent', flex: 1 }}
                        canvasStyle={{ backgroundColor: 'transparent', flex: 1 }}
                        defaultStrokeIndex={0}
                        defaultStrokeWidth={5}
                        closeComponent={<TopButton icon={require("../assets/icons/cancel.png")} />}
                        undoComponent={<TopButton icon={require("../assets/icons/undo.png")} />}
                        clearComponent={<TopButton icon={require("../assets/icons/broom.png")} />}
                        eraseComponent={<TopButton icon={require("../assets/icons/eraser.png")} />}
                        strokeComponent={color => (
                            <View style={[{ backgroundColor: color }, styles.strokeColorButton]} />
                        )}
                        strokeSelectedComponent={(color, index, changed) => {
                            return (
                                <View style={[{ backgroundColor: color, borderWidth: 2 }, styles.strokeColorButton]} />
                            )
                        }}
                        strokeWidthComponent={(w) => {
                            return (
                                <View style={{ flexDirection: "row", justifyContent: "space-between", width: 60 }}>
                                    <View>
                                        <TopButton icon={require("../assets/icons/pen.png")} />
                                    </View>
                                    <View style={styles.strokeWidthButton}>
                                        <View style={{
                                            backgroundColor: 'white', marginHorizontal: 2.5,
                                            width: Math.sqrt(w / 3) * 10, height: Math.sqrt(w / 3) * 10, borderRadius: Math.sqrt(w / 3) * 10 / 2
                                        }} />
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>

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
    spinner: {
        flex: 1,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 50
    },
    strokeColorButton: {
        marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
    },
    strokeWidthButton: {
        marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
        justifyContent: 'center', alignItems: 'center', backgroundColor: '#39579A'
    },
    functionButton: {
        marginHorizontal: 2.5, marginVertical: 8, height: 30, width: 60,
        backgroundColor: '#39579A', justifyContent: 'center', alignItems: 'center', borderRadius: 5,
    }
});

const mapStateToProps = state => {
    return {
    };
};


export default connect(mapStateToProps,
    {
    })(Estimated);
