// styles/StyledHero.ts
import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; // Adjust height as necessary
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`;

export const HeroBackground = styled.div<{ imageUrl: string }>`
background: url(${({ imageUrl }) => imageUrl}) no-repeat center center;
background-size: cover; // Ensure it covers the full area
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100vh;
z-index: -1;

&::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); // Increase the darkness for better readability
`;

export const HeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

export const HeroText = styled.p`
  font-size: 20px;
  margin-bottom: 32px;
  max-width: 60%; // Ensures text does not span too wide
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; // Space between buttons
`;
