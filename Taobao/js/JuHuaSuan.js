/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    ImageBackground,
    Button
} from 'react-native';

export default class JuHuaSuan extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('title', '默认标题'),
        }
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ImageBackground
                source={{
                url: 'https://facebook.github.io/react/logo-og.png'
            }}
                style={{
                width: '100%',
                height: '100%'
            }}>
                <Text
                    style={{
                    marginTop: 100,
                    marginLeft: 100,
                    fontSize: 32,
                    color: 'red'
                }}>聚划算</Text>
                <Button
                    title="修改标题"
                    onPress={() => this.props.navigation.setParams({title: '聚划算2!'})}/>
            </ImageBackground>
        );
    }
}

AppRegistry.registerComponent('JuHuaSuan', () => JuHuaSuan);

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    }
})
