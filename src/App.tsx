import Layout from "./component/LayoutComponents/Layout";
import ListComponent from "./component/ListComponent";
import ReduxToolkitExample from "./component/ReduxToolkitExample";
import UseCallBackComponent from "./component/UseCallBackComponent/UseCallBackComponent";
import UseContextComponent from "./component/UseContext/Level1";
import UseEffectComponent from "./component/UseEffectComponent";
import UseRefComponent from "./component/UseRefComponent";
import UseStateComponent from "./component/UseStateComponent";

function App() {
    return (
        <Layout>
            <ListComponent />
            <UseStateComponent />
            <UseEffectComponent />
            <UseContextComponent />
            <UseRefComponent />
            <UseCallBackComponent />
            <ReduxToolkitExample />

            {/* Callback */}
            {/* UseMemo */}
        </Layout>
    );
}

export default App;
