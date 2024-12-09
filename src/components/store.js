import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './locationReducer';

// Set up the store with configureStore
const store = configureStore({
  reducer: {
    location: locationReducer, // Add the location reducer here
  },
});

export default store;
