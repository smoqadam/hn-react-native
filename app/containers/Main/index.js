
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet, View
} from 'react-native';
import style from './styles';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Main extends React.Component {
  

  render() {

      return (
        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Hacker News {this.props.title}</Title>
            </Body>
            <Right />
          </Header>
          <Content>
              {this.props.children}
          </Content>
        </Container>   
      
    );
    }
  }
