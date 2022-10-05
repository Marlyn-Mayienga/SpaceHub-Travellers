/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
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
