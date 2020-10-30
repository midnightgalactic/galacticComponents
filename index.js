import react from "react"
import styled from "styled-components"
import Layout, {GlobalStyle} from "./components/layout"


//export default function App() {
//    return (
//        <React.Fragment>
//            <GlobalStyle />
//            <Layout>
//                <div>Hi there ya goon</div>
//            </Layout>
//        </React.Fragment>
//    )
//}

ReactDOM.render(
    <React.Fragment>
        <GlobalStyle />
        <Layout>
            <div>Hi there ya goon</div>
        </Layout>
    </React.Fragment>
);