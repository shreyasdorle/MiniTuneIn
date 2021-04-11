import * as C from '../constants';
import { getStations } from '../services';

export const fetchDataBegin = () => ({
  type: C.GET_STATIONS_BEGIN
})

export const fetchDataSuccess = data => ({
  type: C.GET_STATIONS_SUCCESS,
  payload: data,
})

export const fetchDataFailure = error => ({
  type: C.GET_STATIONS_FAILURE,
  payload: error
})

export function fetchStations(props) {
  return async dispatch => {
    dispatch(fetchDataBegin())
    try {
      const data = await getStations(props);
      if (data) {
        dispatch(fetchDataSuccess(data))
      }
    } catch (error) {
      dispatch(fetchDataFailure(error))
    }
  }
}