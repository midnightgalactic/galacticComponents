import React from "react"
import styled from "styled-components"

const SideBarContainer = styled.div`
    border-style: dashed;
    border-color: green;
    border-radius: 25px;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: span 2;
    align-self: center;
    justify-self: center;
    grid-area: sidebar-1
`;

export default function Sidebar1({ children }) {
    return (
        <SideBarContainer>
            {children}
        </SideBarContainer>
    )
}