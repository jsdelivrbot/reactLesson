import { FETCH_MEETUPS } from './actions';

const INITIAL_STATE = {
  meetups: {
    data: [],
    isFetched: false,
    error: {
      on: false,
      message: null
    }
  }
};

export default (state = INITIAL_STATE, action) =>{
  switch(action.type){
    case `${FETCH_MEETUPS}_PENDING`:
      return INITIAL_STATE;
    case `${FETCH_MEETUPS}_FULLFILLED`:
      return {
        data: action.payload,
        isFetched: true,
        error: {
          on: false,
          message: null
        }
      }
    case `${FETCH_MEETUPS}_REJECTED`:
      return {
        data: [],
        isFetched: true,
        error: {
          on: true,
          message: 'Lỗi load dữ liệu'
        }
      }
    default:
    return state;
  }
}
