import * as C from '../constants';

const initialState = {
  data: [],
  loading: false,
  hasErrors: false
};

export default function GetStationsReducer(state = initialState, action) {
  switch (action.type) {
    case C.GET_STATIONS_BEGIN:
      return {
        ...state,
        loading: true
      }
    case C.GET_STATIONS_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        hasErrors: false
      }
    case C.GET_STATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true
      }
    default:
      return state
  }
}
