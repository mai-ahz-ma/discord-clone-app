import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState, 
    channelId: null,
    channelName:null,
  },
 
  reducer, {
    setChannelId: ( state, action ) => {
      state.app += action.payload;
    },
    
  },
);

export const { setChannelId } = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;