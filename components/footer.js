import React from "react"
import styled from "styled-components"

const Container = styled.div`
    grid-area: footer;
    justify-self: center;
    align-self: center;
    border-style: solid;
    border-color: pink;
    border-radius: 25px;
`;


export default function Footer({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}