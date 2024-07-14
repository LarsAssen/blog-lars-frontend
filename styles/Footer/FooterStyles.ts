import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.backgroundCard};
  color: #fff;
  padding: 20px 0;
  text-align: center;
  margin-top: 30px;
  width: 100%;
  min-height: 150px; // Set a minimum height to prevent shrinking
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: 300px; // Set a minimum width to prevent shrinking
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;

  @media (max-width: 768px) {
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    padding: 0 5px;
  }
`;

export const FooterLinks = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap; // Ensure links wrap on smaller screens
  justify-content: center;
  width: 100%; // Ensure full width
  min-width: 200px; // Set a minimum width to prevent shrinking

  a {
    color: ${({ theme }) => theme.text};
    margin: 0 15px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 480px) {
      margin: 5px 10px; // Adjust margin for smaller screens
    }
  }
`;

export const SocialMedia = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; // Ensure social media icons wrap on smaller screens
  color: ${({ theme }) => theme.text};
  width: 100%; // Ensure full width
  min-width: 200px; // Set a minimum width to prevent shrinking

  & > * {
    margin: 0 10px;

    @media (max-width: 480px) {
      margin: 5px 5px; // Adjust margin for smaller screens
    }
  }
`;

export const CopyRight = styled.small`
  color: #666;
  text-align: center;
  width: 100%;
  min-width: 200px; // Set a minimum width to prevent shrinking
`;
