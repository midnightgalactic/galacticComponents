import React from "react";
import styled, { createGlobalStyle } from "styled-components"
import Header from "./header"
import Sidebar1 from "./sidebar-1"
import Footer from "./footer"


export const GlobalStyle = createGlobalStyle`
    html {
        min-height: 100%;
        background-image: radial-gradient(circle farthest-side at bottom center,cyan,pink);
        background-size: cover;
    },
    body {
        min-height: 50%;
    }

`;

//export const WaveBackground = styled.body`
//    background-image: radial-gradient(ellipse at bottom center,cyan,pink);
//`;

const Container = styled.div`
    min-height: 50%;
    border-style: double;
    background-color: white;
    box-shadow: 10px 10px 5px 0px grey;
    border-color: black;
    border-radius: 25px;
    display: grid;
    max-width: 650px;
    padding: 0px 1rem;
    align-items: center;
    gap: 5px;
    margin: 3rem auto;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
    "header header header"
    "sidebar-1 content content"
    "footer footer footer"
`;

const ContentContainer = styled.div`
    border-style: solid;
    border-color: cyan;
    border-radius: 25px;
    grid-area: content;
    justify-self: center;
    align-self: center;
`;


export default function Layout({ children }) {
    return (
        <React.Fragment>
            <Container>
                <Header/>
                <Sidebar1>
                    <p>Hello, i'm in the sidebar!</p>
                </Sidebar1>
                <ContentContainer>
                    {children}
                </ContentContainer>
                <Footer>
                    <p>For the galactic pioneers 🌴</p>
                </Footer>
            </Container>
        </React.Fragment>
    )
}