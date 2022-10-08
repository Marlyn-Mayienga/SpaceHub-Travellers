import { configureStore } from '@reduxjs/toolkit';
import rocketStore from './Rockets/rockets';
import missionsReducer from './Missions/missions';
import dragonsReducer from './Dragons/dragons';

const store = configureStore({
  reducer: {
    storeSlice: rocketStore,
    missions: missionsReducer,
    dragonSlice: dragonsReducer,
  },
});

export default store;
