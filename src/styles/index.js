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
  width: 40%;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  font-family: "Helvetica Neue", sans-serif;
`;

export const Card = styled.div`
  animation: 3s ${floating} infinite;
  span {
    font-size: 10rem;
  }
  font-family: "Poppins", sans-serif;
`;

export const TimeContainer = styled.div`
  margin: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 50px 0px 0px 0px;
    padding: 0;
  }

  h5 {
    margin: 0;
    padding: 0;
    &:hover {
      cursor: pointer;
    }
  }
`;
