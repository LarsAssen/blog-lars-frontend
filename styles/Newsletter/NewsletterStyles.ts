import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center; /* Align items to the left */
  background-color: ${({ theme }) => theme.backgroundCard};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 1rem;
  align-self: flex-start; /* Align the title to the left */
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.backgroundCard};
  color: ${({ theme }) => theme.text};
  margin-top: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.buttonText};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.primaryColorHover};
  }
`;

export const Message = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.text};
`;
