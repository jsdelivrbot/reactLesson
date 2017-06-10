export default function(state =null, action){
    console.log(action.type);
    console.log(action.payload);
    switch(action.type){
        case 'BOOK_SELECTED':
        return action.payload;
    }
    return state;
}