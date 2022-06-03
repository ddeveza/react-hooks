import {useRef} from "react";

const UseRefComponent = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const _handleClick = () => {
        inputRef?.current?.focus();
    };
    return (
        <div>
            <input
                type={"text"}
                ref={inputRef}
                className='shadow-sm border border-gray-500'
            />
            <button
                type={"button"}
                onClick={_handleClick}
                className={
                    " shadow-md rounded-lg p-1 m-1 hover:bg-gray-400 hover:text-gray-100"
                }>
                Focus Input Field
            </button>
        </div>
    );
};

export default UseRefComponent;
