import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchdataBase = createAsyncThunk(
  'server/fetchdatabase',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      return data.products; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const initialState = {
  data: [],  
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: "server",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchdataBase.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchdataBase.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchdataBase.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default movieSlice.reducer;
