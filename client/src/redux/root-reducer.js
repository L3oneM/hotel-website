import { combineReducers } from 'redux';

import roomsReducer from './rooms/rooms.reducer';

const rootReducer = combineReducers({
  roomsData: roomsReducer
});

export default rootReducer;
