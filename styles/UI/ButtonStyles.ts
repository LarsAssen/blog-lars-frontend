import styled, { css } from "styled-components";

interface ButtonProps {
  theme: "light" | "dark";
  variant: "primary" | "secondary";
  size: "small" | "medium" | "large";
}

const sizeStyles = {
  small: css`
    font-size: 12px;
    padding: 8px 16px;
  `,
  medium: css`
    font-size: 14px;
    padding: 12px 24px;
  `,
  large: css`
    font-size: 16px;
    padding: 16px 32px;
  `,
};

const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.secondaryColor};
    &:hover {
      background-color: ${({ theme }) => theme.secondaryColor};
      color: ${({ theme }) => theme.primaryColor};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.secondaryColor};
    color: ${({ theme }) => theme.primaryColor};
    &:hover {
      background-color: ${({ theme }) => theme.primaryColor};
      color: ${({ theme }) => theme.secondaryColor};
    }
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  font-family: ${({ theme }) => theme.fontFamily};
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease;
  ${({ size }) => sizeStyles[size]};
  ${({ variant }) => variantStyles[variant]};
`;
