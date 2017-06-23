import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import {fetchMeetup} from './constants/api.js';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  static defaultProps = {
    fetchMeetup
  }
  state = {
    loading: false,
    meetups: []
  }
  async componentDidMount(){
    this.setState({
      loading: true
    });
    const data = await this.props.fetchMeetup();
    this.setState({
      loading: false,
      meetups: data.data.meetups
    })
    console.log("this.state.meetups = ", this.state.meetups);
    // this.props.fetchMeetup()
    // .then(data=> {
    //     this.setState({
    //     loading: false,
    //     meetups: data.meetups
    //   });
        
    // })
    // .catch(err=>{
    //     console.log(err)
    // });
    
    
  }
  render() {
    if(this.state.loading){
      console.log("this.state.loading = ", this.state.loading);
      return(
        <View style = { styles.container }>
          <ActivityIndicator size = "large"/>
        </View>
      );
    }
    const listItem = this.state.meetups.map((item, k)=>{
      console.log("item", item);
      return(
        <View key = {k}>
          <Text >{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
      );
    });
    return (
      <View style={styles.container}>
        <Text>Meetup Application!</Text>  
        {listItem}
        <Text>Công ty cổ phần kim khí hóa chất Cát Tường</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
