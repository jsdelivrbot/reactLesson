

export default function (state =null, action) {
    
    switch(action.type){
        case "SIGNUP_USER":
            return action.payload;
    }
    return state;
}