import {useEffect, useState} from "react";

const UseEffectComponent = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setTimeout(() => setTime(new Date()), 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [time]);

    return <div className='font-bold'>{time.toLocaleTimeString()}</div>;
};

export default UseEffectComponent;
