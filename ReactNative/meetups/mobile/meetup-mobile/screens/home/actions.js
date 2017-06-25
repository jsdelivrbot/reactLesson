import { MeetupApi } from '../../constants/api';

const _MeetupApi = new MeetupApi();

export const FETCH_MEETUPS = 'FETCH_MEETUPS' ;

export const fetchMeetups = ()=>({
  type: FETCH_MEETUPS,
  payload: _MeetupApi.fetchGroupMeetups()
})
