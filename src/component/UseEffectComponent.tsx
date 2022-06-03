import {useEffect, useState} from "react";

const UseEffectComponent = () => {
    const [time, setTime] = useState<Date>();

    useEffect(() => {
        const timer = setTimeout(() => setTime(new Date()), 1000);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return <>{time}</>;
};

export default UseEffectComponent;
