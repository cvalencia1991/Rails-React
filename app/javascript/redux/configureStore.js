import { configureStore } from '@reduxjs/toolkit';
import greeterReducer from './Greetings/Greetings';

const store = configureStore({
    reducer: {
        Greetings: greeterReducer,
    },
});

export default store;