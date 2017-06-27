import { FETCH_MEETUPS } from './actions';

const INITIAL_STATE = {
  group: {
    data: [],
    isFetched: false,
    error: {
      on: false,
      message: null,
    },
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${FETCH_MEETUPS}_PENDING`:
      return INITIAL_STATE;
    case `${FETCH_MEETUPS}_FULLFILLED`:
      return { ...state,
        group: {
          data: action.payload,
          isFetched: true,
          error: {
            on: false,
            message: null,
          },
        },
      };
    case `${FETCH_MEETUPS}_REJECTED`:
      return {
        group: {
          data: [],
          isFetched: true,
          error: {
            on: true,
            message: 'Lỗi load dữ liệu',
          },
        },
      };
    default:
      return state;
  }
};
