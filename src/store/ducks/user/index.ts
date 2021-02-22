import { Reducer } from 'redux';
import { UserState, UserTypes } from './types';

const INITIAL_STATE: UserState = {
  data: {
    id: '',
    accessToken: '',
    refreshToken: '',
  },
  error: false,
  loading: false,
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case UserTypes.LOAD_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case UserTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: {
          id: '',
          accessToken: '',
          refreshToken: '',
        },
      };
    default:
      return state;
  }
};

export default reducer;
