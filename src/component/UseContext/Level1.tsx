import {createContext, useState} from "react";
import Level2 from "./Level2";

interface NameContextType {
    name: string;
    setName: (v: string) => void;
}

export const NameContext = createContext<NameContextType | null>(null);

export const Level1 = () => {
    const [name, setName] = useState("Dennis");
    return (
        <NameContext.Provider value={{name, setName}}>
            <div className='border-b-2 pb-2 border-gray-500'>
                <h1 className='text-center'> UseContext : </h1>
                Level1 : {name}
                <div>
                    <Level2 />
                </div>
            </div>
        </NameContext.Provider>
    );
};

export default Level1;
