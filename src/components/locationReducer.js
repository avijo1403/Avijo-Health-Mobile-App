import { SET_AREA_NAME } from './locationAction';

// Initial state with areaName field
const initialState = {
  areaName: '', // Store area name
  // latitude: null,
  // longitude: null,
};

// Reducer function
const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AREA_NAME:
      return {
        ...state,
        areaName: action.payload, 
      };
    default:
      return state;
  }
};

export default locationReducer;
