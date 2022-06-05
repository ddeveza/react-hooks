import {memo} from "react";

interface ButtonProps {
    children: React.ReactNode;
    handleClick: () => void;
}

const Button = ({children, handleClick}: ButtonProps) => {
    console.log("Rendering Button", children);
    return (
        <button
            className={
                " shadow-md rounded-lg p-1 m-1 hover:bg-gray-400 hover:text-gray-100"
            }
            onClick={handleClick}>
            {children}
        </button>
    );
};

export default memo(Button);
