 import axios from "axios";
const fakeGroupId = "594dc69a479d581e34312612";
axios.defaults.baseURL = "http://192.168.43.242:3000/api";

class MeetupApi {
    constructor(){
        this.groupId = fakeGroupId;
        this.path = `/groups/${this.groupId}/getGroupMeetups`;

        async function fetchGroupMeetups(){
            const { data } = await axios.get(this.path);

            return data.group.meetups;
        }
    }
}

export {
    MeetupApi
}
export const fetchMeetup = ()=>{
     return axios.get('http://192.168.43.242:3000/api/meetups')
    // fetch('http://192.168.1.12:3000/api/meetups')
    // .then(res => res.json())
    // .catch(err=>{        
    //     console.log("====================================================");
    //     console.log("Da co loi:", err);
    //     console.log("====================================================");
    // });
    
}