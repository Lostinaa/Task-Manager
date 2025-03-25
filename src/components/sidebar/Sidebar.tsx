"use client";
import styled from 'styled-components';
import React from 'react';
import { useGlobalState } from '@/app/context/globalProvider';


function Sbar() {
  const {theme} = useGlobalState();
  console.log(theme);

  return (
    <div>
      <div className="Sbar"> 

        <SidebarStyled>
            this is side bar
        </SidebarStyled>
      </div>
    </div>
  )
}
const SidebarStyled = styled.nav`
background: linear-gradient(to right,rgb(120, 100, 142),rgba(175, 88, 88, 0.64));
`;

export default Sbar;
