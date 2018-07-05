
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
import Main from '../Main';
import Api from '../../api/Api';

export default class HomeScreen extends React.Component {

    constructor(props){
      super(props);
      this.api = new Api();
      this.state = {
        isLoading: true,
        page: 1,
        data: []
      };
    }
    componentDidMount(){
      this.getData(this.state.page);
    }


    getData(page = 1){
      
      console.log({page});
      console.log(this.state.isLoading);
      this.api
      .getHotList(page)
      .then(json => {
        let posts = this.state.data;
         for (let i=0;i < json.hits.length;i++){
            posts.push(json.hits[i]);
         }
         this.setState({
            isLoading: false,
            data: posts,
            page
          });
      }).catch(function(e){
        console.log(e);
      })

    }

    
    render() {
      return(
        <Main title="Front Page">  
          <FlatList
                onEndReached={() => {
                  this.setState({
                    ...this.state,
                    isLoading: true,
                  });
                  this.getData(this.state.page+1);
                  }}
                onEndReachedThreshold={0.5}
                data={this.state.data}
                renderItem={({item}) => (
                <TouchableHighlight
                    onPress={() => {
                        this.props.navigation.navigate('Details', {item})}
                    }>
                    <View style={{padding:10, backgroundColor: 'white'}}>
                        <Text>{item.title?item.title:item.story_title}</Text>
                        <Text note>{item.author}</Text>
                        <Right><Text note>{(new Date(item.created_at_i)).getDate()}</Text></Right>
                    </View>
                </TouchableHighlight>
            )}
            keyExtractor={(item, index) => index.toString()}
            />
            {this.state.isLoading && <Spinner />}
        </Main>
      );
    }

  }
