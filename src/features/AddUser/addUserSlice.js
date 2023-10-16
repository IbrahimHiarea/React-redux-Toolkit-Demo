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

export const fetchAdd = createAsyncThunk('addUser/fetchAdd' , async (user) => {
    return axios
        .post(
            `https://jsonplaceholder.typicode.com/users`,
            JSON.stringify({
                id: user.id,
                name: user.name,
                username: user.username,
                phone: user.phone,
                website: user.website,    
            }),
            {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }
        )
        .then((response) => {
            return response.data;
        })
});

const addUserSlice = createSlice({
    name: 'addUser',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchAdd.pending , (state) => {
            state.loading = true;
        })
        builder.addCase(fetchAdd.fulfilled , (state , action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = '';
            console.log(action.payload);
        })
        builder.addCase(fetchAdd.rejected , (state , action) => {
            state.loading = false;
            state.data = null;
            state.error = action.error.message;
        })
    }
});

export default addUserSlice.reducer;