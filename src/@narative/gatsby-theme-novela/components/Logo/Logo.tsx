import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

import { Icon } from '@types';
import logo from './logo.png'

const Logo: Icon = ({ fill = "white" }) => {
  return (
    <LogoContainer>
      <svg 
      className="Logo__Desktop"
      height="50px" 
      width="192" 
      xmlns="http://www.w3.org/2000/svg" >
        <image href={logo} x="10" y="5" width="50" height="50" />
      </svg>
      <svg
        width="25"
        height="30"
        viewBox="0 0 25 30"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Mobile" >
        <image href={logo} width="25" height="30" />
      </svg>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`;
