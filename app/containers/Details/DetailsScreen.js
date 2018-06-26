
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Button,
    View
} from 'react-native';


export default class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Details',
    };
    render(){
        const id = this.props.navigation.getParam('id');
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen ID: {id}</Text>
        </View>
        )
    }
}