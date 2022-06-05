import {memo} from "react";

interface CountProps {
    text: string;
    count: number;
}

const Count = ({text, count}: CountProps) => {
    console.log(`Render ${text}`);

    return (
        <div>
            {text} : {count}
        </div>
    );
};

export default memo(Count);
