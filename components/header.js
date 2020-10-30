import React from "react"
import styled from "styled-components"


const Container = styled.div`
    grid-area: header;
    border-style: solid;
    border-color: red;
    border-radius: 25px;
`;

const Container2 = styled.header`
    display: inline-block;
    max-width: 650px;
    padding: 0px 1rem;
    align-items: center;
    float: right;
`;

const BigTitle = styled.h3`
    display: inline-block;
    marginRight: 10px;
`;

const UList = styled.ul`
    display: inline-block;
    listStyle: none;
    float: right;
    marginBlockStart: 0px;
    marginBlockEnd: 0px
    paddingTop: 3px;
    border-style: dashed;
    border-color: red;
    border-radius: 25px;
`;

const ListLink = styled.li`
    display: inline-block;
    marginRight: 1rem;
`;

export default function Header() {
    return (
        <Container>
            <header>
                <title>Galactic Core</title>
            </header>
            <BigTitle>Galactic Core</BigTitle>
            <Container2>
                <UList>
                    <ListLink>Block Placeholder 5555</ListLink>
                    <ListLink>Address Placeholder 0xabcdef123</ListLink>
                </UList>
            </Container2>
        </Container>
    )
}