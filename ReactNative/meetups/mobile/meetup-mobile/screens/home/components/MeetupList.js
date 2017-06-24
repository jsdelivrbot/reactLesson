import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from './styles/MeetupList';

const MeetupList = ({ group })=>{
  console.log("group = ", group);
  if(group.meetups){
    return(
      <View style = {styles.root} >
        <View style = {styles.titleContainer}>
          <Text style = {styles.title}>My Meetups</Text>
        </View>
        <View style = { styles.contentContainer }>
          <ScrollView horizontal>
          { group.meetups.map((meetup, i)=>{
              return (
                <View key = {i} style = {styles.meetupCard}>
                  <View  style = {styles.meetupCardTopContainer}>
                    <Text style = { styles.meetupCardTitle }>{meetup.title}</Text>
                  </View>
                  <View  style = {styles.meetCardBottomContainer}>
                    <Text style = { styles.meetupCardMetaName } >{ group.name }</Text>
                    <Text style = { styles.meetupCardMetaDate } >Mar 2m 6:00pm</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  } else {
    return(
      <View>
        <Text>error: Meetups = []</Text>
      </View>
    );
  }
}

export default MeetupList;
