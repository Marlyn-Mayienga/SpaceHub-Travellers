import Mission from '../redux/Missions/missions.js';
import Slice from '../redux/Rockets/rockets.js';
import Dragons from '../redux/Dragons/dragons.js';

describe('test the reducers to return the initial state', () => {
  it('test the storeSlice reducer for the mission to return empty array as initialState', () => {
    expect(Mission(undefined, {})).toEqual([]);
  });

  it('test the storeSlice reducer for the rockets to return empty array as initialState', () => {
    expect(Slice(undefined, {})).toEqual([]);
  });

  it('test the storeSlice reducer for the dragons to return empty array as initialState', () => {
    expect(Dragons(undefined, {})).toEqual([]);
  });
});
