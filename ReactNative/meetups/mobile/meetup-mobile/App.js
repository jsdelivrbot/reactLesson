import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
      meetups: data.meetups
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Meetup Application!</Text>        
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
