// sab se pahile configure dale ye ye aata kaha se hai redux ya tool kit se 

import {configureStore} from '@reduxjs/toolkit';

//10.yaha import kar na padh ta hai waha ki file 
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})

// use state hote wesa aapn ne bana liya 