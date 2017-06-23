 import axios from "axios";

export const fetchMeetup = ()=>{
     return axios.get('http://192.168.1.12:3000/api/meetups')
    // fetch('http://192.168.1.12:3000/api/meetups')
    // .then(res => res.json())
    // .catch(err=>{        
    //     console.log("====================================================");
    //     console.log("Da co loi:", err);
    //     console.log("====================================================");
    // });
    
}