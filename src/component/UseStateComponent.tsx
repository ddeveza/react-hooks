import classNames from "classnames";
import {useState} from "react";

const UseStateComponent = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div
            className={classNames("cursor-pointer select-none", {
                "text-green-800": toggle,
                "text-red-600": !toggle,
            })}
            onClick={() => setToggle(!toggle)}>
            <h1 className='font-extrabold'>UseState</h1>
        </div>
    );
};

export default UseStateComponent;
