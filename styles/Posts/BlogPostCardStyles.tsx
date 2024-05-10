import styled from "styled-components";

export const Card = styled.div`
  flex: 1 1 30%; // Allows three cards per row with some margin
  margin: 10px;
  background: ${({ theme }) => theme.backgroundCard};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.cardShadow};  // Using theme-based shadow
  transition: transform 0.3s, box-shadow 0.3s; 


  &:hover {
    transform: translateY(-5px); // Slight lift effect on hover
    box-shadow: ${({ theme }) => theme.cardShadow}, 0 12px 24px rgba(0, 0, 0, 0.1);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  width: 100%;
`;


export const CardButton = styled.button`
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    `;

export const CardContent = styled.div`
    padding: 1rem;
    `;
export const CardTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.primaryColor};
    `;
export const CardDescription = styled.p`
    font-size: 1rem;
    `;

