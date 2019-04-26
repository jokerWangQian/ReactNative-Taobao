/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    Button,
    Dimensions,
    TouchableOpacity,
    TextInput,
    AppRegistry,
    StyleSheet
} from 'react-native';

var screenWidth = Dimensions
    .get('window')
    .width;
var screenHeight = Dimensions
    .get('window')
    .height;

export default class MoreScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {title: '更多'};
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={style.container}></View>
        );
    }
}

AppRegistry.registerComponent('MoreScreen', () => MoreScreen);

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    }
})
