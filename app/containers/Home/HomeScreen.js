
import React, {Component} from 'react';
import {
    FlatList,
    Platform,ActivityIndicator, View,
    StyleSheet,
    // Text,
    TouchableHighlight
} from 'react-native';

import {
  Spinner,Right,Left,Text,
} from 'native-base';


import style from './styles';
// import { Container, List, ListItem, Spinner, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Main from '../Main';
import Api from '../../api';

export default class HomeScreen extends React.Component {

    constructor(props){
      super(props);

      this.state = {
        isLoading: true
      };
    }
    componentDidMount(){
      let api = new Api();  
      let hotList;;
      fetch('https://hn.algolia.com/api/v1/search_by_date')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          isLoading: false,
          data: json
        });
      })
      .catch((error) =>{
        console.error(error);
      });
    }

    render() {
      if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <Spinner/>
          </View>
        )
      }
      console.log(this.state.data);
      return(
        <Main title="Hot">  
          <FlatList
                data={this.state.data.hits}
                renderItem={({item}) => (
                <TouchableHighlight
                    onPress={() => {
                        this.props.navigation.navigate('Details', {item})}
                    }>
                    <View style={{padding:10, backgroundColor: 'white'}}>
                        <Text>{item.title?item.title:item.story_title}</Text>
                        <Text note>{item.author}</Text>
                    </View>
                </TouchableHighlight>
            )}
            keyExtractor={(item, index) => index.toString()}
            />
        </Main>
      );
    }

  }
