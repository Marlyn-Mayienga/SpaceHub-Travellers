/* eslint-disable import/prefer-default-export */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ROCKET = 'ROCKET';

export const getRockets = createAsyncThunk(ROCKET, async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
  const getted = response.data;
  const data = getted.map((item) => ({
    id: item.rocket_id,
    name: item.rocket_name,
    type: item.rocket_type,
    img: item.flickr_images[0],
    reserved: false,
  }));
  console.log(data);
  return data;
});

export const storeSlice = createSlice({
  name: 'Rockets',
  initialState: [],
  reducers: {
    rocketReserve(state, action) {
      const newState = state.map((rocket) => {
        if (rocket.id === action.payload.id) {
          return {
            ...rocket,
            value: !rocket.value,
          };
        }
        return {
          ...rocket,
        };
      });
      return newState;
    },
  },

  extraReducers: {
    [getRockets.fulfilled]: (state, action) => action.payload,
  },
});
const rocketAction = storeSlice.actions;
export { rocketAction };
export default storeSlice.reducer;
