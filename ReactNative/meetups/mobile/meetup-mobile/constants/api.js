import axios from 'axios';

// export const fakeGroupId = '594dc69a479d581e34312612';
export const fakeGroupId = '594e3a056343531ef46db3b7';
// export const baseURL = 'http://192.168.42.87:3000/api';
export const baseURL = 'http://192.168.1.10:3000/api';
axios.defaults.baseURL = baseURL;

class MeetupApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/getGroupMeetups`;
  }
  async fetchGroupMeetups() {
    try {
      const { data } = await axios.get(this.path);
      console.log('data = ', data);
      return data.group;
    } catch (err) {
      console.log('==============Da Co Loi==================');
      console.log(err);
      console.log('================================');
    }
  }
}

export {
  MeetupApi,
};
export const fetchMeetup = () =>
      axios.get(`${axios.defaults.baseURL}/meetups`)
    // fetch('http://192.168.1.12:3000/api/meetups')
    // .then(res => res.json())
    // .catch(err=>{
    //     console.log("====================================================");
    //     console.log("Da co loi:", err);
    //     console.log("====================================================");
    // });

;
