import styled, { keyframes } from "styled-components";

const floating = keyframes`
    0% { 
    transform: translate(0,  0px); 
} 
    50%  { 
    transform: translate(0, 15px); 
} 
    100%   { 
    transform: translate(0, -0px); 
}   
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
`;

export const Card = styled.div`
  animation: 3s ${floating} infinite;
`;
