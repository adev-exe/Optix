import React, {Component, useState } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import { Camera } from 'expo-camera';
import { askAsync } from "expo-permissions";

interface Screen {
    playSound: boolean,
    camera: boolean,
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#555',
        height: '100%',
        width: '100%',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperInner: {
        backgroundColor: 'transparent',
        height: '100%',
        width: '100%',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scanButton: {
        width: '50%',
        height: '10%',
        margin: '10%',
        backgroundColor: '#0066ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 360,
    },
    replayButton: {
        width: '50%',
        height: '10%',
        margin: '10%',
        backgroundColor: '#ff9900',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 360,
    },
    backButton: {
        width: '100%',
        height: '10%',
        backgroundColor: '#dd0000',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 60,
    }
});

export class Screen extends Component <{}, Screen> {
    constructor(props : any) {
        super(props);
        this.state = {
            playSound: false,
            camera: false,
        }
    }

    async componentDidMount() {
        const { status } = await askAsync("camera");

        if (status !== "granted") {
            throw new Error("Camera permission not granted");
        }
    }

    goBack() {
        this.setState({camera : false});
    }

    goCamera() {
        this.setState({camera : true});
    }

    render() {
        return(
            <View style={styles.wrapper}>
                { this.state.camera === false &&
                    <View style={styles.wrapperInner}>
                        <TouchableHighlight
                            style={styles.scanButton}
                            onPress={() => this.goCamera()}
                        >
                            <View>
                                <Text style={styles.buttonText}>
                                    Scan
                                </Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.replayButton}
                            //onPress={}
                        >
                            <View>
                                <Text style={styles.buttonText}>
                                    Replay
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                }
                { this.state.camera === true &&
                    <View style={styles.wrapperInner}>
                        <Camera style={styles.wrapperInner}>
                            <TouchableHighlight
                                style={styles.backButton}
                                onPress={() => this.goBack()}
                            >
                                <View>
                                    <Text style={styles.buttonText}>
                                        Back
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </Camera>
                    </View>
                }
            </View>
        );
    }
}
export default Screen;
