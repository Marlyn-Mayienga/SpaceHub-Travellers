import Mission from '../redux/Missions/missions';
import Slice from '../redux/Rockets/rockets';
import Dragons from '../redux/Dragons/dragons';

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
