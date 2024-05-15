import styled from "styled-components";

export const PostContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  margin-top: 100px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const HeaderImage = styled.div`
  width: 100%;
  height: 400px;
  max-height: 400px;
  position: relative;
  overflow: hidden;
`;

export const ContentBlock = styled.div`
  margin-bottom: 1rem;
`;

export const StyledParagraph = styled.p`
  font-size: 16px; // Example size, adjust as needed
  line-height: 1.5;
  color: ${({ theme }) => theme.text};
  margin-bottom: 16px;
`;

export const StyledImageContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  position: relative;
  height: 400px; // Fixed height, adjust as needed

  & > span {
    height: 100% !important;
    width: 100% !important;
    position: relative !important;

    & img {
      object-fit: cover;
    }
  }
`;
