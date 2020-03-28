import roomsData from './roomsData';

const INITIAL_STATE = {
  rooms: [...roomsData]
};

const roomsReducer = (state = INITIAL_STATE, action) => {
  return state;
};

export default roomsReducer;
