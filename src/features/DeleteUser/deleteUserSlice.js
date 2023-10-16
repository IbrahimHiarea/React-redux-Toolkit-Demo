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

export const fetchDelete = createAsyncThunk('deleteUser/fetchDelete' , async (id) => {
    return axios
        .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            return response.data;
        })
});

const deleteUserSlice = createSlice({
    name: 'deleteUser',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchDelete.pending , (state) => {
            state.loading = true;
        })
        builder.addCase(fetchDelete.fulfilled , (state , action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = '';
        })
        builder.addCase(fetchDelete.rejected , (state , action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message;
        })
    }
});

export default deleteUserSlice.reducer;