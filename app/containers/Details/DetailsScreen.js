
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Button,
    View
} from 'react-native';
import Main from '../Main';
import {
  Text,Left, Right,
  Spinner, Separator
} from 'native-base';

import HTML from 'react-native-render-html';  

import Api from '../../api/Api';
import { bold } from 'ansi-colors';

export default class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Details',
    };

    constructor(props){
        super(props);
        this.api = new Api();
        this.state = {
          isLoading: true
        };
      }
    componentDidMount(){
        let item = this.props.navigation.getParam('item');
        console.log('item', item);
        this.api
          .getComments(item.objectID)
          .then(json => {
              this.setState({
                isLoading: false,
                data: json
              });
          }).catch(function(e){
            console.log(e);
          })
    }

    render(){
      if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <Spinner/>
          </View>
        )
      }
        return (
            <Main title={this.state.data.title}>  
                <View style={{ flex: 1}}>
                    <View style={{padding:10, backgroundColor:'#eeeeee'}}>
                      <Text>
                        {this.state.data.title}
                        {this.state.data.story_text}
                      </Text>
                      <Right>
                         <Text note>{this.state.data.author}</Text>
                      </Right>
                    </View>
                    <Text style={{color:'#000000',margin: 10}}>Comments: </Text>
                    <Separator  />
                    <Comments children={this.state.data.children} />
                </View>
            </Main>
        )
    }
}

 class Comments extends Component {

    render() {
  
      let children = this.props.children;
        
      return (
        <View style={{borderLeftWidth:1,borderLeftColor:'#cccccc'}}>
          {children.map(comment =>
            <View key={comment.id} style={{marginLeft:10}}>
              {comment.text && <HTML html={comment.text} />}
              {comment.children && <Comments children={comment.children}/>}
            </View>
          )}
        </View>
      )
      }
}