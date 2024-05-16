import styled from "styled-components";

// Styled components for the layout
export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
  align-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const TextColumn = styled.div`
  padding: 20px;
  color: ${({ theme }) => theme.text};
`;

export const ImageColumn = styled.div`
  display: flex;
  justify-content: center; // Centers the image horizontally
  align-items: center;
  padding: 20px;
`;

export const ProfileImage = styled.img`
  max-width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 10px; // Optional: adds rounded corners to the image
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  margin-left: 20px;
  margin-bottom: 10px;
  ${({ theme }) => theme.text};
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  margin: 20px;
  line-height: 1.6;
  ${({ theme }) => theme.text};
`;
