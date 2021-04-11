import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import GetStationsReducer from './GetStationsReducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  stations: GetStationsReducer
});
