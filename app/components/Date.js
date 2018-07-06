
import React, {Component} from 'react';
import {
    Text, View
} from 'react-native';

export default class Sidebar extends React.Component {
  

  render() {
    let date = new Date(this.props.date * 1000);
      return (
        <View style={this.props.style}>
            <Text>{date.getFullYear()}/{date.getMonth()}/{date.getDay()}</Text>
        </View>
      );
    }
  }
