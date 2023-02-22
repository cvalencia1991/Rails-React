import {createAsyncThunk} from '@reduxjs/toolkit';

//const
const GET_GREETER = 'GET_GREETER';

//reducer
export default function greeterReducer(state = {}, action){
    switch (action.type) {
        case`${GET_GREETER}/fulfilled`:
            return action.payload;
        default:
            return state;
    }
}

//action
export const getGreeter = createAsyncThunk(GET_GREETER, async () => {
    const response = await fetch('http://127.0.0.1:3000/api/v1/greetings');
    const data = await response.json();
    return data
    }
);

