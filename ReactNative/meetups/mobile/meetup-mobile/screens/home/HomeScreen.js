import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles/HomeScreen';
import { MeetupList } from './components';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import color from '../../constants/colors';
import { connect } from 'react-redux';
import { fetchMeetups } from './actions';
import { bindActionCreators } from 'redux';
import { Button, Icon } from 'native-base';
// import { NavigationActions } from 'react-navigation';
// const navigateAction = NavigationActions.navigate('createMeetup');


class HomeScreen extends Component {
  static navigationOptions = {
    // headerTitleStyle: {},
    headerStyle: {
      backgroundColor: color.redColor,
    },
    headerRight: (
        <View>
          <Button
            // onPress={() => this.props.navigation.dispatch(navigateAction)
            // }
            transparent
          >
            <Icon
              name="md-add-circle"
              style={{
                fontSize: 25,
                color: color.whiteColor,
                marginTop: 20,
              }}
            />
          </Button>
        </View>
      ),

    tabBarIcon: ({ tintColor }) =>
      <FontAwesome name="home" size={25} color={tintColor} />
    ,
  };
  componentDidMount() {
    this.props.fetchMeetups();
  }

  render() {
    if (this.props.group) {
      return (
        <View style={styles.root} >
          <View style={styles.topContainer}>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
            <Text>HomeScreen</Text>
          </View>
          <View style={styles.bottomContainer}>
            <MeetupList group={this.props.group.data} />
          </View>
        </View>
      );
    }
    return (
      <View />
    );
  }
}

function mapStateToProps(state) {
  return {
    group: state.home.group,
  };
}
function mapActionToProps(dispatch) {
  return bindActionCreators({
    fetchMeetups,
  }, dispatch);
}

export default connect(mapStateToProps, mapActionToProps)(HomeScreen);
