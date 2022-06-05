import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface initialStateType {
    count: number;
}

const initialState: initialStateType = {
    count: 0,
};

const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state: {count: number}) => {
            state.count += 1;
        },
        decrement: (state: {count: number}) => {
            state.count -= 1;
        },
        incrementBy: (
            state: {count: number},
            {payload}: PayloadAction<number>
        ) => {
            state.count += payload;
        },
    },
});

export const {increment, decrement, incrementBy} = CounterSlice.actions;

export default CounterSlice.reducer;
