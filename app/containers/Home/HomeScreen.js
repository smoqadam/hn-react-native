
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
} from 'react-native';
import style from './styles';
import { Container, List, ListItem, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Main from '../Main';
import ItemsList from '../../components/Items/Items';
import getData from '../../helper/helpers';

export default class HomeScreen extends React.Component {
    
    render() {
      var ff = getData();
      return(
        <Main title="Hot">
          <ItemsList items={ff} />
        </Main>
      );
    }
  }
