import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/**
 *  1 - initial state
 *  2 - crete thunk action
 *  3 - create slice
 *  4 - export reducer and actions
 *  5 - add the reducer to store
*/

const initialState = {
    loading: false,
    data: null,
    error: '',
}

export const fetchUser = createAsyncThunk('getUser/fetchUser' , async (id) => {
    return axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => {
        return response.data;
    })
});

const getUserSlice = createSlice({
    name: 'getUser',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending , (state) => {
            state.loading = true;
        })
        builder.addCase(fetchUser.fulfilled , (state , action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = '';
        })
        builder.addCase(fetchUser.rejected , (state , action) => {
            state.loading = false;
            state.data = null;
            state.error = action.error.message;
        })
    },
})

export default getUserSlice.reducer;