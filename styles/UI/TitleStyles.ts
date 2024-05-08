import styled from "styled-components";

interface TitleProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

const getFontSize = (level: number) => {
  switch (level) {
    case 1:
      return "2.5rem";
    case 2:
      return "2rem";
    case 3:
      return "1.75rem";
    case 4:
      return "1.5rem";
    case 5:
      return "1.25rem";
    case 6:
      return "1rem";
    default:
      return "1.5rem";
  }
};

export const StyledTitle = styled.h1<TitleProps>`
  font-size: ${({ level }) => getFontSize(level)};
  color: ${({ theme }) => theme.titleColor};
  position: relative;
  display: inline-block;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fontFamily};

  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 3px;
    background-color: ${({ theme }) => theme.primaryColor};
    margin-top: 8px;
  }
`;
