import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import { MeetupApi } from '../../constants/api';
import styles from './styles/HomeScreen';
import { MeetupList } from './components';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import color from '../../constants/colors';
import { connect } from 'react-redux';
// const meetupApi = new MeetupApi();
import { fetchMeetups } from './actions';
@connect(state=>({
  meetups: state.home.meetups
}), { fetchMeetups } )
class HomeScreen extends Component {
  // static defaultProps = {
  //   meetupApi:meetupApi
  // }

  static navigationOptions  = {
    // title: "Trang Chủ",
    headerTitleStyle:{},
    headerStyle: {
      backgroundColor: color.redColor,
    },
    tabBarIcon: ({tintColor}) =>
      <FontAwesome name="home" size={25} color={ tintColor } />
    ,
  };
  // state = {
  //   loading: false,
  //   group: []
  // }
  // async componentDidMount(){
  //   this.setState({
  //     loading: true
  //   })
  //   try{
  //     const data = await meetupApi.fetchGroupMeetups();
  //      this.setState({group: data});
  //   }
  //   catch(err){
  //     console.log("=============  Đã có lỗi ========================");
  //     console.log(err);
  //     console.log("=================================================");
  //   }

  //   this.setState({
  //     loading: false
  //   });

  // }
  componentDidMount(){
    this.props.fetchMeetups();
  }

  render(){
    console.log("this.props ", this.props);
    if(this.state){
      return(
        <View  style={styles.root} >
          <View style = {styles.topContainer}>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
            <Text>HomeScreen</Text>
          </View>
          <View style = {styles.bottomContainer}>
            <MeetupList group = {this.state.group} />
          </View>
        </View>
      );
    }
    else {
      return (
        <View></View>
      );
    }

  }
}
export default HomeScreen;
