import {useEffect, useState} from "react";

const UseEffectComponent = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setTimeout(() => setTime(new Date()), 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [time]);

    return (
        <div className='border-b-2 pb-2 border-gray-500'>
            <h1 className='text-center'> UseEffect Hook : </h1>
            <div className='font-bold text-center'>
                {time.toLocaleTimeString()}
            </div>
        </div>
    );
};

export default UseEffectComponent;
