import { configureStore } from '@reduxjs/toolkit';
import rocketStore from './rockets/rockets';
import dragonStore from './dragons/dragons';
import missionStore from './missions/missions';

const store = configureStore({
  reducer: {
    rocketSlice: rocketStore,
    dragonSlice: dragonStore,
    missionsSlice: missionStore,
  },
});

export default store;
