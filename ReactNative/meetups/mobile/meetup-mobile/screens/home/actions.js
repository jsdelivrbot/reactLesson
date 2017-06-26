import { MeetupApi, fakeGroupId, baseURL } from '../../constants/api';
import axios from 'axios';

export const FETCH_MEETUPS = 'FETCH_MEETUPS' ;

export const fetchMeetups = ()=>{
  return function(dispatch){
    axios.get(`${baseURL}/groups/${fakeGroupId}/getGroupMeetups`)
    .then(function(res){
      dispatch({
        type: `${FETCH_MEETUPS}_FULLFILLED`,
        payload: res.data.group
      })
    })
    .catch(function(err){
      console.log("==============================================")
      console.log("loi load du lieu trong action", err);
      console.log("================================================")
      dispatch({
        type: `${FETCH_MEETUPS}_REJECTED`,
        payload: err
      })
    })
  }

//   const obj = {
//     type: `${FETCH_MEETUPS}_FULLFILLED`,
//     payload: meetupApi.fetchGroupMeetups()
//   };
//   console.log("object return = ", obj)
//   return obj;

}
