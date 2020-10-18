import React, {Component, useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
interface Screen {

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
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 60,
    }
});

export class Screen extends Component <{}, Screen> {
    async ComponentDidMount() {
        const { status } = await Camera.requestPermissionsAsync();

        if (status !== "granted") {
            throw new Error("No access to camera");
        }
        else {
            console.log(status);
        }
    }

    async componentWillUnmount() {
    }

    render() {
        return(
            <View style={styles.wrapper}>
                <TouchableHighlight
                    style={styles.scanButton}
                    //onPress={}
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
        );
    }
}
export default Screen;
