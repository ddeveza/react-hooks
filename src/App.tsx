import UseContextComponent from "./component/UseContext/Level1";
import UseEffectComponent from "./component/UseEffectComponent";
import UseRefComponent from "./component/UseRefComponent";
import UseStateComponent from "./component/UseStateComponent";

function App() {
    return (
        <div>
            <UseStateComponent />
            <UseEffectComponent />
            <UseContextComponent />
            <UseRefComponent />
            {/* Callback */}
            {/* UseMemo */}
        </div>
    );
}

export default App;
