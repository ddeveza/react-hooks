import classNames from "classnames";
import {useState} from "react";

const UseStateComponent = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className='border-b-2 pb-2 border-gray-500'>
            <div
                className={classNames(
                    "cursor-pointer select-none text-center",
                    {
                        "text-green-800": toggle,
                        "text-red-600": !toggle,
                    }
                )}
                onClick={() => setToggle(!toggle)}>
                <h1 className='font-extrabold'>UseState Hook</h1>
            </div>
        </div>
    );
};

export default UseStateComponent;
