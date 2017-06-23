export const fetchMeetup = ()=>{
    fetch('http://localhost:3000/api/meetups')
    .then(res=>{
        res.json()
    })
}