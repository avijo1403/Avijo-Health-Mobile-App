// Define action types
export const SET_AREA_NAME = 'SET_AREA_NAME';


export const addArea = (areaName) => ({
  type: SET_AREA_NAME,
  payload: areaName,
});
