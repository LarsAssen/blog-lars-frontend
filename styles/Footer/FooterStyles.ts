import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const FooterLinks = styled.div`
  margin-bottom: 20px;
  a {
    color: #fff;
    margin: 0 15px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SocialMedia = styled.div`
  margin-bottom: 20px;
`;

export const CopyRight = styled.small`
  color: #666;
`;
