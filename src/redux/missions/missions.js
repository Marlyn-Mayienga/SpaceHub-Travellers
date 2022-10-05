/* eslint-disable import/prefer-default-export */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const MISSIONS = 'MISSIONS';

export const getMissions = createAsyncThunk(MISSIONS, async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  const getted = response.data;
  const data = getted.map((item) => ({
    id: item.mission_id,
    name: item.mission_name,
    description: item.description,
    reserved: false,
  }));
  console.log(data);
  return data;
});

export const storeSlice = createSlice({
  name: 'Missions',
  initialState: [],
  reducers: {
    missionReserve(state, action) {
      const newState = state.map((mission) => {
        if (mission.id === action.payload.id) {
          return {
            ...mission,
            value: !mission.value,
          };
        }
        return {
          ...mission,
        };
      });
      return newState;
    },
  },

  extraReducers: {
    [getMissions.fulfilled]: (state, action) => action.payload,
  },
});
const missionAction = storeSlice.actions;
export { missionAction };
export default storeSlice.reducer;
