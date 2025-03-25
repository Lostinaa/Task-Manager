"use client";
import React from 'react'
import styled from 'styled-components'

interface Props{
    children: React.ReactNode;
    
}

function GlobalStyle({children}: Props) {
  return (
    <GlobalStyles>
      {children}
    </GlobalStyles>
  )
}
const GlobalStyles = styled.div`
background: linear-gradient(to right,rgb(120, 100, 142),rgba(175, 88, 88, 0.64));
padding:2.5rem;
display: flex;
gap: 2rem;
height: 100%;
`;

export default GlobalStyle;
