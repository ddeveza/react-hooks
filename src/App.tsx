import Layout from "./component/LayoutComponents/Layout";
import ListComponent from "./component/ListComponent";
import ReduxToolkitExample from "./component/ReduxToolkitExample";
import UseCallBackComponent from "./component/UseCallBackComponent/UseCallBackComponent";
import UseContextComponent from "./component/UseContext/Level1";
import UseEffectComponent from "./component/UseEffectComponent";
import UseMemoComponent from "./component/UseMemoComponent";
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
            <UseMemoComponent />
            <ReduxToolkitExample />

            {/* Callback */}
            {/* UseMemo */}
        </Layout>
    );
}

export default App;
