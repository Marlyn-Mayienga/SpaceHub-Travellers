/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  const getted = response.data;
  const data = getted.map((item) => ({
    id: item.mission_id,
    name: item.mission_name,
    description: item.description,
    reserved: false,
  }));
  return data;
});
