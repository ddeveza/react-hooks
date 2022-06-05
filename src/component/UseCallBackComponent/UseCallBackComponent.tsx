import {useCallback, useState} from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const UseCallBackComponent = () => {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(1000);

    const increaseAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);

    /*  const increaseAge = () => {
        setAge(age + 1);
    }; */

    const increaseSalary = useCallback(() => {
        setSalary(salary + 1000);
    }, [salary]);

    /*  const increaseSalary = () => {
        setSalary(salary + 1000);
    };
 */
    return (
        <div className='flex flex-col items-center justify-center border-b-2 pb-2 border-gray-500'>
            <Title />
            <Count text='Age' count={age} />
            <Button handleClick={increaseAge}>Increase Age</Button>
            <Count text='Salary' count={salary} />
            <Button handleClick={increaseSalary}>Increase Salary</Button>
        </div>
    );
};

export default UseCallBackComponent;
