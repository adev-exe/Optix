import React, {Component} from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

interface Screen {

}

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        width: '100%',
    },
});

export class Screen extends Component <{}, Screen> {
    constructor(props : any) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <SafeAreaProvider>
                <StatusBar />

                    <TouchableHighlight>
                        <View>
                            <Text>Scan</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View>
                            <Text>Replay Audio</Text>
                        </View>
                    </TouchableHighlight>

             </SafeAreaProvider>

        );
    }
}
export default Screen;
