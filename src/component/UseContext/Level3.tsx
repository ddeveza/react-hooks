import {useContext} from "react";
import {NameContext} from "./Level1";

const Level3 = () => {
    const name = useContext(NameContext);
    return (
        <div onClick={() => name?.setName("Deveza")}>Level3 : {name?.name}</div>
    );
};

export default Level3;
