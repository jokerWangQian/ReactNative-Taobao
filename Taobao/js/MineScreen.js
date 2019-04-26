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

export default class MineScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {title: '我的淘宝'};
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

AppRegistry.registerComponent('MineScreen', () => MineScreen);

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue'
    }
})
