import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset, setCount } from "./counter.action";

export interface CounterState {
    count: number;
}

export const initialCounterState: CounterState = {
    count: 0
};

export const counterReducer = createReducer(
    initialCounterState,
    on(increment, (state) => {
        const newState = { ...state, count: state.count + 1 };
        localStorage.setItem('count', newState.count.toString());
        return newState;
    }),
    on(decrement, (state) => {
        const newState = { ...state, count: state.count - 1 };
        localStorage.setItem('count', newState.count.toString());
        return newState;
    }),
    on(reset, (state) => {
        localStorage.setItem('count', '0');
        return { ...state, count: 0 };
    }),
    on(setCount, (state, { count }) => {
        localStorage.setItem('count', count.toString());
        return { ...state, count };
    }),
);