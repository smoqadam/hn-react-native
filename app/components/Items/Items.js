
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
} from 'react-native';
import style from './styles';
import { Container, List, ListItem, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class ItemsList extends React.Component {
    
    render() {
      return (
        <List dataArray={this.props.items}
        renderRow={(item) =>
          <ListItem>
            <Text>{item}</Text>
          </ListItem>
        }>
      </List>
      );
    }
  }
