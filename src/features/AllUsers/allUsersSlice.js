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
    data: [],
    error: '',
}

export const fetchAllUsers = createAsyncThunk('allUsers/fetchAllUsers', async () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.data;
        })
})

const allUsersSlice = createSlice({
    name: 'allUser',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchAllUsers.pending , (state) => {
            state.loading =  true;
        })
        builder.addCase(fetchAllUsers.fulfilled , (state , action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = '';
        })
        builder.addCase(fetchAllUsers.rejected , (state , action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message;
        })
    },
})

export default allUsersSlice.reducer;