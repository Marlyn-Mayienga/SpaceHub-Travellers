/* eslint-disable import/prefer-default-export */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const DRAGONS = 'DRAGONS';

export const getDragons = createAsyncThunk(DRAGONS, async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/dragons');
  const getted = response.data;
  const data = getted.map((item) => ({
    id: item.id,
    name: item.name,
    type: item.type,
    img: item.flickr_images[0],
    reserved: false,
  }));
  return data;
});

export const storeSlice = createSlice({
  name: 'Dragons',
  initialState: [],
  reducers: {
    dragonReserve(state, action) {
      const newState = state.map((dragon) => {
        if (dragon.id === action.payload.id) {
          return {
            ...dragon,
            value: !dragon.value,
          };
        }
        return {
          ...dragon,
        };
      });
      return newState;
    },
  },

  extraReducers: {
    [getDragons.fulfilled]: (state, action) => action.payload,
  },
});
const dragonAction = storeSlice.actions;
export { dragonAction };
export default storeSlice.reducer;
