import {useMemo, useState} from "react";

const UseMemoComponent = () => {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
    const _handleClickOne = () => {
        setCountOne(countOne + 1);
    };
    const _handleClickTwo = () => {
        setCountTwo(countTwo + 1);
    };

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++;
        return countOne % 2 === 0;
    }, [countOne]);

    /*   const isEven = () => {
        let i = 0;
        while (i < 2000000000) i++;
        return countOne % 2 === 0;
    }; */
    return (
        <div className='flex flex-col items-center justify-center border-b-2 pb-2 border-gray-500'>
            <h1 className='text-center'> UseMemo Hook : </h1>
            <div>
                <button className='' onClick={_handleClickOne}>
                    CounterOne : {countOne}
                </button>
                <span className='ml-2 font-bold'>
                    {isEven ? "Even" : "Odd"}
                </span>
            </div>

            <button onClick={_handleClickTwo}>CounterTwo : {countTwo}</button>
        </div>
    );
};

export default UseMemoComponent;
