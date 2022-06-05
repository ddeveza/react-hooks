import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {RootState} from "../app/store";
import {decrement, increment, incrementBy} from "../features/CounterSlice";

const ReduxToolkitExample = () => {
    const [value, setValue] = useState(0);
    const count = useAppSelector((state: RootState) => state.counter.count);
    const dispatch = useAppDispatch();

    const _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setValue(+e.currentTarget.value);
    };

    const _handleIncrementBy = () => {
        if (value < 0 || value === 0)
            alert("Input value must be greater than 0");
        else {
            dispatch(incrementBy(value));
        }
    };

    return (
        <div className='flex flex-col justify-center items-center '>
            <h1 className='text-center'> Redux Toolkit : </h1>
            <h1 className='text-center'>Counter : {count}</h1>
            <button
                className={
                    " shadow-md rounded-lg p-1 m-1 hover:bg-gray-400 hover:text-gray-100"
                }
                onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button
                onClick={() => dispatch(decrement())}
                className={
                    " shadow-md rounded-lg p-1 m-1 hover:bg-gray-400 hover:text-gray-100"
                }>
                Decrement
            </button>

            <div>
                <button
                    onClick={_handleIncrementBy}
                    className={
                        " shadow-md rounded-lg p-1 m-1 hover:bg-gray-400 hover:text-gray-100"
                    }>
                    Increment By:
                </button>
                <input
                    type='number'
                    value={value}
                    onChange={(e) => _handleChange(e)}
                    className='border-b-2 border-gray-500'
                />
            </div>
        </div>
    );
};

export default ReduxToolkitExample;
