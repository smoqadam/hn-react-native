
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet, View
} from 'react-native';
import style from './styles';
import { Container,Drawer, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import SideBar from '../../components/Sidebar';

export default class Main extends React.Component {
  

  render() {

      return (
        <Container>
          <Header>
            <Body>
              <Title>Hacker News {this.props.title}</Title>
            </Body>
            <Right>
            <Button transparent
              onPress={this.props.onRefreshPress}>
                <Icon name='refresh' />
              </Button>
            </Right>
          </Header>
          <Content>
              {this.props.children}
          </Content>
        </Container>   
      
    );
    }
  }
