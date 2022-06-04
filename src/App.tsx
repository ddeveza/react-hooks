import Layout from "./component/LayoutComponents/Layout";
import UseContextComponent from "./component/UseContext/Level1";
import UseEffectComponent from "./component/UseEffectComponent";
import UseRefComponent from "./component/UseRefComponent";
import UseStateComponent from "./component/UseStateComponent";
import {Counter} from "./features/counter/Counter";

function App() {
    return (
        <Layout>
            <UseStateComponent />
            <UseEffectComponent />
            <UseContextComponent />
            <UseRefComponent />
            <Counter />
            {/* Callback */}
            {/* UseMemo */}
        </Layout>
    );
}

export default App;
