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

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  font-family: "Helvetica Neue", sans-serif;
`;

export const Card = styled.div`
  animation: 3s ${floating} infinite;

  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3rem;
  color: gray;
  margin: 10px;

  .clicked {
    font-size: 10rem;
    color: black;
  }

  span {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const TimeContainer = styled.div`
  margin: 20px;
  color: lightgray;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 0;
    padding: 0;
  }

  img {
    width: 50%;
    height: 50%;
    margin-top: 20px;
  }
`;

export const Spinner = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 1rem solid lightgray;
  border-top: 1rem solid gray;
  animation: ${spin} 0.5s linear infinite;
  margin: 40px;
`;
