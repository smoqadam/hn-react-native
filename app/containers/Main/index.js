
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet, View
} from 'react-native';
import style from './styles';
import { Container, Header, Title, Content, Button, Right, Body, Icon } from 'native-base';

export default class Main extends React.Component {
  

  render() {

      return (
        <Container>
          <Header>
            <Body>
              <Title>Hacker News {this.props.title}</Title>
            </Body>
            {this.props.refreshButton && 
              <Right>
                <Button transparent
                  onPress={this.props.onRefreshPress}>
                  <Icon name='refresh' />
                </Button>
              </Right>
              }
              </Header>
          <Content>
              {this.props.children}
          </Content>
        </Container>   
      
    );
    }
  }
