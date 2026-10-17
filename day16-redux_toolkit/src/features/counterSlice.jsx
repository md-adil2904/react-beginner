import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name : 'counter',

  // this is state for holding data
  initialState : {
    count : 0
  },
  // this is action for updating data
  reducers : {
    increment : (state) =>{
      state.count++;
    },
    decrement : (state) => {
      state.count--;
    },
    incrementByValue : (state,action) => {
      state.count += Number(action.payload);
    }

  }
});

console.log(counterSlice);

export const {increment, decrement,incrementByValue} = counterSlice.actions;

export default counterSlice.reducer