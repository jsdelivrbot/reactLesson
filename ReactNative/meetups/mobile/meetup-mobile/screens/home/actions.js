import { MeetupApi, fakeGroupId, baseURL } from '../../constants/api';
import axios from 'axios';

export const FETCH_MEETUPS = 'FETCH_MEETUPS';

export const fetchMeetups = () =>
  function (dispatch) {
    axios.get(`${baseURL}/groups/${fakeGroupId}/getGroupMeetups`)
      .then((res) => {
        dispatch({
          type: `${FETCH_MEETUPS}_FULLFILLED`,
          payload: res.data.group,
        });
      })
      .catch((err) => {
        console.log('==============================================');
        console.log('loi load du lieu trong action', err);
        console.log('================================================');
        dispatch({
          type: `${FETCH_MEETUPS}_REJECTED`,
          payload: err,
        });
      });
  }

//   const obj = {
//     type: `${FETCH_MEETUPS}_FULLFILLED`,
//     payload: meetupApi.fetchGroupMeetups()
//   };
//   console.log("object return = ", obj)
//   return obj;

;
