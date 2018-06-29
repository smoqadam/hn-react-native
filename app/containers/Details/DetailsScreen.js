
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Button,
    View
} from 'react-native';
import Main from '../Main';
import {
    Spinner
  } from 'native-base';
  import HTML from 'react-native-render-html';  

export default class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Details',
    };

    constructor(props){
        super(props);
  
        this.state = {
          isLoading: true
        };
      }
    componentDidMount(){
        let item = this.props.navigation.getParam('item');
        console.log(item.story_id);
        
      fetch('https://hn.algolia.com/api/v1/items/'+item.story_id)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          isLoading: false,
          data: json
        });
      })
      .catch((error) =>{
        console.error(error);
      });
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
            <Main title="Hot">  
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Details Screen ID: {this.state.data.text?this.state.data.text:this.state.data.story_title}</Text>
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
        <View style={{borderLeftWidth:1,borderLeftColor:'#eeeeee'}}>
          {children.map(comment =>
            <View key={comment.id} style={{marginLeft:10}}>
              <HTML html={comment.text?comment.text:''} />
              {comment.children && <Comments children={comment.children}/>}
            </View>
          )}
        </View>
      )
    }
}